import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { User } from './User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  private UserUrl = "http://localhost:52073/api/";

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.UserUrl+"User/Login/", user, httpOptions).pipe(
      catchError(this.handleError<User>('login'))
    );
  }
}
