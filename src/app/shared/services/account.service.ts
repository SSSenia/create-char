import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { ITheme, ICharacter, IStringWithTag } from "../interfaces/account";

const DEFAULT_THEME: ITheme = {
  theme: 'Day',
  background: '#fff'
};

const DEFAULT_CHARACTER: ICharacter = {
  race: 'Human',
  class: 'None'
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private notPassedCommentNotifications = environment.COMMENT_NOTIFICATION;
  private character!: BehaviorSubject<ICharacter>;
  private theme!: BehaviorSubject<ITheme>;
  private currentTutorialNotification: BehaviorSubject<IStringWithTag[][]> = new BehaviorSubject<IStringWithTag[][]>([]);
  private currentCommentNotification: BehaviorSubject<IStringWithTag[][]> = new BehaviorSubject<IStringWithTag[][]>([]);

  constructor(
    private translateService: TranslateService
  ) {
    const rawTheme = localStorage.getItem('theme');
    this.theme = new BehaviorSubject<ITheme>(rawTheme ? JSON.parse(rawTheme) : DEFAULT_THEME);
    this.theme.subscribe((object) => {
      localStorage.setItem('theme', JSON.stringify(object));
    })

    const rawCharacter = localStorage.getItem('character');
    this.character = new BehaviorSubject<ICharacter>(rawCharacter ? JSON.parse(rawCharacter) : DEFAULT_CHARACTER);
    this.character.subscribe((object) => {
      localStorage.setItem('character', JSON.stringify(object));
    })

    this.character.subscribe((char) => {
      const coincidences = this.notPassedCommentNotifications.find(x => x.class == char.class && x.race == char.race);
      this.setCommentNotification(coincidences ? coincidences.content : [])
      this.notPassedCommentNotifications = this.notPassedCommentNotifications.filter(x => !(x.class == char.class && x.race == char.race));
    })
  }

  setRace(characterRace: string) {
    this.character.next(Object.assign(this.character.getValue(), { race: characterRace }))
  }

  setClass(characterСlass: string) {
    this.character.next(Object.assign(this.character.getValue(), { class: characterСlass }))
  }

  setCharacter(character: ICharacter) {
    this.character.next(character);
  }

  setTheme(theme: string) {
    this.theme.next(Object.assign(this.theme.getValue(), { theme: theme }))
  }

  setColor(color: string) {
    this.theme.next(Object.assign(this.theme.getValue(), { background: color }))
  }

  setTutorialNotification(notification: IStringWithTag[][]) {
    this.currentTutorialNotification.next(notification);
  }

  setCommentNotification(notification: IStringWithTag[][]) {
    this.currentCommentNotification.next(notification);
  }

  getCurrentTutorialNotification(): BehaviorSubject<IStringWithTag[][]> {
    return this.currentTutorialNotification;
  }

  getCurrentCommentNotification(): BehaviorSubject<IStringWithTag[][]> {
    return this.currentCommentNotification;
  }

  getCharacter(): BehaviorSubject<ICharacter> {
    return this.character;
  }

  getTheme(): BehaviorSubject<ITheme> {
    return this.theme;
  }

  setRaceTutorial() {
    this.setCharacter({ race: environment.RACES[0], class: 'None' })
    this.setTutorialNotification(environment.TUTORIAL_NOTIFICATION_RACE);
  }

  setClassTutorial() {
    this.setClass(environment.CLASSES[0])
    this.setTutorialNotification(environment.TUTORIAL_NOTIFICATION_CLASS);
  }

  setThemeTutorial() {
    const character = this.getCharacter();
    const commentary = environment.TUTORIAL_NOTIFICATION_SETTINGS_PESONALED
      .find(x => x.class == character.getValue().class && x.race == character.getValue().race);
    this.setTutorialNotification(
      commentary ? [commentary.content].concat(environment.TUTORIAL_NOTIFICATION_SETTINGS)
        : environment.TUTORIAL_NOTIFICATION_SETTINGS);
  }

  changeLang(value: string) {
    if (value) {
      localStorage.setItem('lang', value)
      this.translateService.use(value);
    }
  }
}
