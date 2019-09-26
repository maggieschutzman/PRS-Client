import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { Subscriber } from 'rxjs';
import { User } from '@model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private router: Router) { }

private loggedInUser: User | null = null;


setLoggedInUser(user: User): void {
  this.loggedInUser = user;
}

getLoggedInUser(): User | null {
  return this.loggedInUser;
}

isUserLoggedIn(): boolean
 { return this.loggedInUser!= null }


isAdmin(): boolean {
  if(this.isUserLoggedIn())
  return false
  return this.getLoggedInUser().isAdmin;
}

isReviewer(): boolean {
  if(!this.isUserLoggedIn())
  return false
  return this.getLoggedInUser().isReviewer;
  }
}