import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { User } from './User';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private UserUrl = "http://localhost:52073/api/";

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggingObservable = this.loggedIn.asObservable();

  changeLoggedIn(value) {
    this.loggedIn.next(value);
  }

  // @Output() loggingToggle: EventEmitter<boolean> = new EventEmitter();
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { 
   
  }
  
  login(user: User): Observable<User> {
    let Request = {
      UserName : user.username,
      Password:user.password,
      grant_type: "password"
    }
    return this.http.post<any>(this.UserUrl+"user/login/", Request, httpOptions).pipe(
      catchError(this.handleError<any>('login'))
    );
  }
}
