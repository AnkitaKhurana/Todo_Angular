import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  logged: Boolean
  constructor( ) {
    this.logged = false;
   }
   logging(value : Boolean){
     console.log('Logging',value)
     this.logged = value;
   }
  ngOnInit() {
  }

}
