import { Component, Input, OnInit } from '@angular/core';
import { IStringWithTag } from '../../interfaces/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-tutorial-notification',
  templateUrl: './tutorial-notification.component.html',
  styleUrls: ['./tutorial-notification.component.scss']
})
export class TutorialNotificationComponent implements OnInit {


  @Input() notification: IStringWithTag[][] = [];

  constructor(
    private accountservice: AccountService
  ) { }

  ngOnInit(): void { }

  close() {
    this.accountservice.setTutorialNotification([]);
  }
}
