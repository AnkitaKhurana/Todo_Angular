import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  @Output() logged = new EventEmitter<boolean>();
  constructor() { }
  loggedIn(agreed: boolean) {
    console.log("loggedIn",agreed)
    this.logged.emit(agreed);    
  }
  ngOnInit() {
  }

}
