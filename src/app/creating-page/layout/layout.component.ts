import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacter, IStringWithTag, ITheme } from 'src/app/shared/interfaces/account';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentCharacter$!: Observable<ICharacter>;
  currentTheme$!: Observable<ITheme>;
  currentTutorialNotificatin$!: Observable<IStringWithTag[][]>;
  currentCommentNotificatin$!: Observable<IStringWithTag[][]>;

  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.currentTutorialNotificatin$ = this.accountService.getCurrentTutorialNotification();
    this.currentCommentNotificatin$ = this.accountService.getCurrentCommentNotification();
    this.currentCharacter$ = this.accountService.getCharacter();
    this.currentTheme$ = this.accountService.getTheme();
  }

}
