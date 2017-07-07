import { Component, OnInit } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'app-message-output',
  templateUrl: './message-output.component.html',
  styleUrls: ['./message-output.component.css']
})
export class MessageOutputComponent implements OnInit {
 
  private messages: Array<Message> = [new Message('Hello!', 'Nobody')];

  constructor() { }

  ngOnInit() {
  }
}
