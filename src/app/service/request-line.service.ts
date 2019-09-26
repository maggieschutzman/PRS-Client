import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';
import { RequestLine } from '@model/requestLine.class';
import { SystemService } from './system.service';


@Injectable({
  providedIn: 'root'
})

export class RequestLineService {
  RequestLine : RequestLine;
  url: string = 'http://localhost:53507/api/RequestLine';
  constructor(private http: HttpClient, private systemSvc: SystemService) {    
  } 
  
  list(): Observable<RequestLine[]> {
    return this.http.get(this.url) as Observable<RequestLine[]>;
  }

  listByReq(id): Observable<RequestLine[]> {
    return this.http.get(this.url+"/?id="+id) as Observable<RequestLine[]>;
  }
  get(id: number): Observable<RequestLine> {
    return this.http.get(this.url+"/"+id) as Observable<RequestLine>;
  }

  create(requestline: RequestLine): Observable<any> {
    return this.http.post(this.url+"/", requestline) as Observable<any>;
  }

  edit(requestline: RequestLine): Observable<any> {
    return this.http.put(this.url+"/"+requestline.id, requestline) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url+"/"+id) as Observable<any>;
  }

}
