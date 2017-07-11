import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'app-message-output',
  templateUrl: './message-output.component.html',
  styleUrls: ['./message-output.component.css']
})
export class MessageOutputComponent implements OnInit {
 
  private messages: Array<Message> = [];

  constructor(msgSvc: MessagingService) { 
    msgSvc.msgStream.subscribe((m: Message) => {
      console.log(m);
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
  }
}
