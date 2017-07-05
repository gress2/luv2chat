import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Message } from '../message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  private messageForm: FormGroup;

  constructor() { 
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
    // need to actually do something with this. for now, just console.log it
    
    let msgContent: string = this.messageForm.value.message;
    let msg: Message = new Message(msgContent, 'Collin');

    console.log(msg);
    this.clearInput();
  }
}
