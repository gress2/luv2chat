import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onNameChange = new EventEmitter<string>();
  private name: string = 'Anonymous';

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    if (name.length > 0) {
      this.onNameChange.emit(name);
      this.name = name;
    }
  }

}
