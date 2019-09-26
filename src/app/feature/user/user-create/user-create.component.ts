import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  title: string = 'User Create';
  loggedInUser: User;

  constructor(private userSvc: UserService,
              private systemSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
  }

  create() {
    this.userSvc.create(this.user).subscribe( resp => {
    console.log('User '+this.user.firstname+' '+this.user.lastname+ ' successfully created!');
    this.router.navigateByUrl('/user/list');
    },
    err => {
      //error
      console.log(err)
     }
    );
   }
  }

