import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logged: Boolean;
  constructor(private loginService : LoginService ) {
    this.logged=false;
  }

  ngOnInit() {
    this.loginService.loggingToggle.subscribe(data => this.logged=data);
  }
  
}
