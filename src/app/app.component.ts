import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ITheme } from './shared/interfaces/account';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public theme!: Observable<ITheme>;

  constructor(
    private accountService: AccountService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.theme = this.accountService.getTheme();
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
}
