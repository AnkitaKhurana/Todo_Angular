import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logged: Boolean;
  subscription:Subscription;

  constructor(private loginService : LoginService ) {
    this.logged=false;
  }
  ngOnInit() {
    this.subscription = this.loginService.loggingObservable.subscribe(data => this.logged=data);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
