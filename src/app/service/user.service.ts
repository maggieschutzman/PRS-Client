import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:53507/api/user';
  constructor(private http: HttpClient) {
  } 

  list(): Observable<User[]> {
    return this.http.get(this.url) as Observable<User[]>;
  }

  create(user: User): Observable<any> {
    return this.http.post(this.url, user) as Observable<any>;
  }
}
