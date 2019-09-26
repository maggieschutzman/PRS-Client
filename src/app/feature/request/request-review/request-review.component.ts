import { Component, OnInit } from '@angular/core';
import { RequestLinesComponent } from '../request-lines/request-lines.component';
import { RequestService } from '@svc/request.service';
import { SystemService } from '@svc/system.service';
import { RequestLineService } from '@svc/request-line.service';
import { Request } from '@model/request.class';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})

export class RequestReviewComponent implements OnInit {
title = "Request Review List";

requestlines: RequestLinesComponent;
loggedInUser: User;
requests: Request[];
request: Request;
user: User;

sortCriteria = 'Id';
sortOrder = 'asc';

  constructor(private requestSvc: RequestService, 
    private systemSvc: SystemService,
    private requestlineSvc: RequestLineService) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
    this.user = this.loggedInUser;
    if (this.loggedInUser.isReviewer==true) {
    this.requestSvc.list().subscribe(resp => {
    this.requests = resp as Request[];
      }
     );
    }
    if (this.loggedInUser.isReviewer!==true) {
      console.log("YOU MUST BE A REVIEWER");
     }
    }    
  }

