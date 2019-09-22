import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@svc/user.service';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  message: any;
  user: User = new User(0, '', '', '', '', '', '', false, false);

  constructor(private userSvc: UserService, private sysSvc: SystemService,
    private router: Router) { }

  login() {
    this.userSvc.login(this.user.username, this.user.password).subscribe(resp => {
        this.user = resp as User;
        this.sysSvc.data.user.instance = this.user;
        this.sysSvc.data.user.loggedIn = true;
        this.router.navigateByUrl('/user/list');

    },
      err => {
        this.message = 'login authentication issue';
      }
    );
  }



  ngOnInit() {
    this.user.password = 'password';
  }

}
