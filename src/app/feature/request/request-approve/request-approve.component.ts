import { Component, OnInit } from '@angular/core';
import { RequestLine } from '@model/requestLine.class';
import { RequestService } from '@svc/request.service';
import { RequestLineService } from '@svc/request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '@model/request.class';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';
@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})

export class RequestApproveComponent implements OnInit {
  title: string = 'Request Approve / Reject';
  id: number;
  liId: string = '0';
  request: Request;
  requestlines: RequestLine[];
  resp;
  requestline: RequestLine;
  loggedInUser: User;
  
  constructor(private requestSvc: RequestService,
              private reqlineSvc: RequestLineService,
              private systemSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
        this.route.params.subscribe(parms => this.id = parms['id']);
        this.requestSvc.get(this.id).subscribe(requests => {
        this.request = requests;
      }
    );

    if (this.liId!='0'&&this.liId!=null) {
        this.delete();
    }
        this.request;
        this.reqlineSvc.listByReq(this.id).subscribe(resp => {
        this.requestlines = resp;
      }
    );
  }

  delete(): void {
    this.reqlineSvc.delete(this.request.id).subscribe(res => {
    this.router.navigateByUrl("/request/review/"+this.id);
      });
  }

  refresh(): void {
    this.requestSvc.get(this.request.id).subscribe(resp => {
      this.request = resp;
    });
  }

  Approve() {
    this.requestSvc.approve(this.request).subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/request/review']);
      });

  }
  Reject() {
      this.requestSvc.reject(this.request.id).subscribe(resp => {
      this.resp = resp});
      this.router.navigate(['/request/review']);
      
 }
}


