import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string = 'http://localhost:53507/api/vendor';
  constructor(private http: HttpClient) {
  } 

  list(): Observable<Vendor[]> {
    return this.http.get(this.url) as Observable<Vendor[]>;
  }
  create(vendor: Vendor): Observable<any> {
    return this.http.post(this.url, vendor) as Observable<any>;
  }

  get(id: number): Observable<Vendor> {
    return this.http.get(this.url+"/"+id) as Observable<Vendor>;
  }

  edit(vendor: Vendor): Observable<any> {
    return this.http.put(this.url+"/"+vendor.id, vendor) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url+"/"+id) as Observable<any>;
  }

}






