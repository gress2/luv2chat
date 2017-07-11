import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { Message } from './chat/message.model';

@Injectable()
export class MessagingService {
  private readonly firebaseUrl: string = 
    'https://luv2chat-dcdf3.firebaseio.com/rest/messages.json';
  private readonly readStream: any = new (<any>window).EventSource(this.firebaseUrl);
  public msgStream: any = new BehaviorSubject<Message>(null);

  constructor(private http: Http) {
    this.readStream.addEventListener('put', 
      (m: MessageEvent) => {
        let jsonData: any = JSON.parse(m.data).data;
        if (!jsonData.author) {
          for (let msgId in jsonData) {
            let jsonMsg = jsonData[msgId];
            this.msgStream.next(new Message(jsonMsg.author, jsonMsg.content, jsonMsg.date));
          }
        } else {
          this.msgStream.next(new Message(jsonData.author, jsonData.content, jsonData.date));
        }
      },
    false);
  }

  postMessage(msg: Message) {
    this.http.post(this.firebaseUrl, {
      author: msg.author,
      content: msg.content,
      date: msg.date
    }).subscribe();
  }
}
