import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-class-setup',
  templateUrl: './class-setup.component.html',
  styleUrls: ['./class-setup.component.scss']
})
export class ClassSetupComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  subscribeToForm!: Subscription;
  classes!: string[];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.accountService.setClassTutorial();
  }
  
  ngOnInit(): void {
    this.classes = environment.CLASSES;
    this.form = new FormGroup({
      class: new FormControl(this.classes[0])
    });
    this.subscribeToForm = this.form.valueChanges.subscribe(() => {
      const value = this.form.controls['class'].value
      if (value) this.accountService.setClass(value)
    });
  }

  ngOnDestroy(): void {
    this.subscribeToForm.unsubscribe();
  }

  submit(): void {
    if (this.form.controls['class'].value)
      this.router.navigate(['/create', 'theme'])
  }
}
