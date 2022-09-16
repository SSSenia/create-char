import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ITheme } from 'src/app/shared/interfaces/account';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-theme-setup',
  templateUrl: './theme-setup.component.html',
  styleUrls: ['./theme-setup.component.scss']
})
export class ThemeSetupComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  public color!: string;
  public theme!: BehaviorSubject<ITheme>;
  public themes!: string[];
  public subscribeToForm!: Subscription;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.accountService.setThemeTutorial();
  }

  ngOnInit(): void {
    this.themes = environment.THEMES;
    this.theme = this.accountService.getTheme();
    this.color = this.theme.getValue().background;
    this.form = new FormGroup({
      theme: new FormControl(this.theme.getValue().theme)
    });
    this.subscribeToForm = this.form.valueChanges.subscribe(() => {
      const value = this.form.controls['theme'].value
      if (value) this.accountService.setTheme(value)
    });
  }

  ngOnDestroy(): void {
    this.subscribeToForm.unsubscribe();
  }

  onChangeColor() {
    this.accountService.setColor(this.color);
  }
  submit() {
    this.router.navigate(['/end'])
  }
}
