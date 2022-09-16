import { Component, Input, OnInit } from '@angular/core';
import { IStringWithTag } from '../../interfaces/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-comment-notification',
  templateUrl: './comment-notification.component.html',
  styleUrls: ['./comment-notification.component.scss']
})
export class CommentNotificationComponent implements OnInit {

  @Input() notification: IStringWithTag[][] = [
    [{ text: 'error', strong: true }]
  ];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void { }

  close() {
    this.accountService.setCommentNotification([]);
  }
}
