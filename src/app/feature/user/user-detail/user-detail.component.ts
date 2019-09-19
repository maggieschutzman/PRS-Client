import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  user: User = new User();
  title: string = 'User-Detail';

  
  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the id from the request,
    //get the associated user record
    this.route.params.subscribe(parms => {
      this.userSvc.get(parms.id).subscribe(resp => {
        this.user = resp as User;
        console.log('user detail'+this.user.id);
      })
    });
  }

  remove() {
    this.userSvc.delete(this.user.id).subscribe(resp => {
      alert('User '+this.user.username+ ' successfully deleted!');
      this.router.navigateByUrl('/user/list');
    },
    err => {
      console.log('error deleting user');
      console.log(err);
    });
  }


}
