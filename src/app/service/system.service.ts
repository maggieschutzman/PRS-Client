import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class SystemService {
data = {
  about: 'System service',
  user: {
    loggedIn: false,
    instance: null
  }
}
  constructor() { }
}
