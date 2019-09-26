import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Request } from '../../../model/request.class';
import { SystemService} from '@svc/system.service';
import { RequestLineService } from '@svc/request-line.service';
import { RequestLinesComponent } from '../request-lines/request-lines.component';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {
  title = 'Request List';
  requestlines: RequestLinesComponent;
  requests: Request[] ;
  sortCriteria = 'name';
  Request: Request;
  sortOrder = 'asc';
  loggedInUser : User;
  
  constructor(private requestSvc: RequestService, 
                private systemSvc: SystemService,
                private userSvc: UserService,
                private router: Router,
                private requestlineSvc: RequestLineService) { }

  ngOnInit() {
    this.requestSvc.list().subscribe(resp => {
    this.requests = resp as Request[];
      });
      this.loggedInUser = this.systemSvc.getLoggedInUser();
      console.log(this.loggedInUser)
    }
  

sortBy(column: string): void {
if (this.sortCriteria === column) {
  this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
} else {
  this.sortCriteria = column;
  this.sortOrder = 'asc';
    }
  }
}
