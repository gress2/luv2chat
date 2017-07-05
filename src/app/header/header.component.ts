import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private name: string = 'Anonymous';

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    if (name.length > 0) {
      this.name = name;
    }
  }

}
