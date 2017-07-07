import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  author: string = 'Anonymous';

  onNameChange(name: string) {
    this.author = name; 
  }
}
