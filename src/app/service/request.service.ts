import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  url: string = 'http://localhost:53507/api/Requests';
  constructor(private http: HttpClient, private systemSvc: SystemService) {    
  } 
  
  list(): Observable<Request[]> {
    return this.http.get(this.url) as Observable<Request[]>;
  }

  listForReview(id): Observable<Request[]> {
    return this.http.get(this.url+"ListReview?id="+id) as Observable<Request[]>;
}

  get(id: number): Observable<Request> {
    return this.http.get(this.url+"/"+id) as Observable<Request>;
  }

  create(request: Request): Observable<any> {
    return this.http.post(this.url, request) as Observable<any>;
  }

  edit(request: Request): Observable<any> {
    return this.http.put(this.url+"/"+request.id, request) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url+"/"+id) as Observable<any>;
  }
  
  submitForReview(request: Request): Observable<any> {
    return this.http.put(this.url+"/Review/"+request.id, Request) as Observable<any>;
  }

  approve(request: Request): Observable<any> {
  return this.http.put(this.url+"/Approved/"+request.id, request) as Observable<any>;
  }

  reject(id: number): Observable<any> {
  return this.http.put(this.url+"/Rejected/"+id, Request) as Observable<any>;
  }

}
