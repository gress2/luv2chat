import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Message } from '../message.model';
import { MessagingService } from '../../messaging.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Input() author: string;
  private messageForm: FormGroup;

  constructor(private msgSvc: MessagingService) { 
    this.messageForm = new FormGroup({
      message: new FormControl()
    });
  }

  ngOnInit() {
  }

  private clearInput(): void {
    this.messageForm.controls.message.reset();
  }

  sendMessage(): void {
    let msgContent: string = this.messageForm.value.message;
    let msg: Message = new Message(msgContent, this.author);
    this.msgSvc.postMessage(msg);
    this.clearInput();
  }
}
