import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";


const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'bearer'+"token" })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private UserUrl = "http://localhost:52073/api/Todos";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient
  ) { }

  getTodos(){
    return this.http.post<any>(this.UserUrl+"todo/All/", httpOptions).pipe(
      catchError(this.handleError<any>('login'))
    );
  }
}
