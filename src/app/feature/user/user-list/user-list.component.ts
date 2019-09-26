import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  title: string= 'User List';
  users: User[];
  loggedInUser: User;
  sortCriteria= 'username';
  sortOrder = 'asc';
  constructor( private userSvc: UserService, 
              private sysSvc : SystemService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(resp => {
    this.users = resp;
    console.log(this.users);
      }
    );
  }


sortBy(column: string): void {
if( this.sortCriteria == column) {
  this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc'); }
else {
  this.sortCriteria = column;
  this.sortOrder = 'asc';
    }
  }
}

