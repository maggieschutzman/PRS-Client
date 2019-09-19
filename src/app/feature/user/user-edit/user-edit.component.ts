import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@model/user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  user: User = new User();
  title: string = 'User-Edit';
  
  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the user id from the request, 
    //get user from database
    this.route.params.subscribe(parms => {
      this.userSvc.get(parms.id).subscribe(resp => {
        this.user = resp as User;
        console.log('user edit: '+this.user.id);
      })
    });
  }

  edit() {
    this.userSvc.edit(this.user).subscribe( resp => {
        //success
        console.log(resp);
        this.router.navigateByUrl('/user/list');
    },
    err => {
      //error
      console.log(err)
    });
  }

}

