import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  lang!: string;
  subscribeToForm!: Subscription;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      lang: new FormControl(localStorage.getItem('lang') || 'en')
    });
    this.subscribeToForm = this.form.valueChanges.subscribe(() => {
      this.accountService.changeLang(this.form.controls['lang'].value);
    });
  }

  ngOnDestroy(): void {
    this.subscribeToForm.unsubscribe()
  }
}
