import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@svc/user.service';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';
import { Request } from '@model/request.class';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  message: any;
  user: User = new User(0, '', '', '', '', '', '', false, false);

  constructor(private userSvc: UserService, 
              private sysSvc: SystemService,
              private router: Router) { }

              ngOnInit() {
              }

  login() {
    this.userSvc.login(this.user.username, this.user.password)
     .subscribe(resp => {
        this.user = resp as User;
        this.sysSvc.setLoggedInUser(this.user);
        console.log("You're now logged in "+this.user.username);
        this.router.navigateByUrl('/user/list');
      },
      err => {
        this.message = 'login authentication issue';
      }
    );
  }}
