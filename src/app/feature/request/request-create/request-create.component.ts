import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';
import { Request } from '@model/request.class';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {
  title = 'Request Create';
  user: User = new User(0, '', '', '', '', '', '', false,false);
  request: Request = new Request(0,'','','','','',0,0,this.user);
  users: User[] = [this.user];
  loggedinUser: User;


   
  constructor(private requestSvc: RequestService, 
                  private userSvc: UserService,
                  private router: Router) { }

  ngOnInit() {
    this.userSvc.list()
      .subscribe(resp => {
        this.users = resp as User[];
      });
  }

  create() {
    this.request.userId = this.request.user.id;
    this.request.user=null;
    console.log(this.request);
    this.requestSvc.create(this.request).subscribe(resp => {
      alert('Request successfully created!');
      this.request = resp as Request;
      this.router.navigate(['request/list']);
    }
    ,
    err => {
      console.log(err);
    }
    );
  }
}
