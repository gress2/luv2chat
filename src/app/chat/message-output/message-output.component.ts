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

  constructor(private msgSvc: MessagingService) { 
    this.msgSvc.msgStream.subscribe((m: Message) => {
      if (m) {
        this.messages.push(m);
      }
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
  }
}
