import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-race-setup',
  templateUrl: './race-setup.component.html',
  styleUrls: ['./race-setup.component.scss']
})
export class RaceSetupComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  subscribeToForm!: Subscription;
  races!: string[];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.accountService.setRaceTutorial();
  }
  
  ngOnInit(): void {
    this.races = environment.RACES;
    this.form = new FormGroup({
      race: new FormControl(this.races[0])
    })
    this.subscribeToForm = this.form.valueChanges.subscribe(() => {
      const value = this.form.controls['race'].value
      if (value) this.accountService.setRace(value)
    });
  }

  ngOnDestroy(): void {
    this.subscribeToForm.unsubscribe();
  }

  submit(): void {
    if (this.form.controls['race'].value)
      this.router.navigate(['/create', 'class']);
  }
}
