import { Component, OnInit } from '@angular/core';
import { Request } from '@model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { RequestLineService} from '@svc/request-line.service';
import { RequestLine } from '@model/requestLine.class';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {
    title: string = 'Request Line Items';
    id: number;
    loggedInUserId: User["id"];
    liId: string = '0';
    request: Request;
    requestlines: RequestLine[];
    resp;
    requestline: RequestLine;
  
    constructor(private requestSvc: RequestService,
                private reqlineSvc: RequestLineService,
                private systemSvc: SystemService,
                private router: Router,
                private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.params.subscribe(parms => this.id = parms['id']);      
      this.requestSvc.get(this.id).subscribe(requests => {
      this.request = requests;
      }
   );
      if (this.liId!='0'&&this.liId!=null) {
        this.delete();
      }
      this.request;
      this.reqlineSvc.listByReq(this.id).subscribe(prlis => {
      this.requestlines = prlis;
        }
      );
    }
  
    
    submitForReview() {
      this.requestSvc.submitForReview(this.request).subscribe(resp => {
      this.resp = resp;
      this.router.navigate(['/request/list']);
        });
      }
    
  
    delete(): void {
      this.reqlineSvc.delete(this.requestline.id).subscribe(res => {
      this.router.navigateByUrl("/request");
      });
    }
  
    refresh(): void {
      this.requestSvc.get(this.request.id).subscribe(resp => {
      this.request = resp;
    })
  }
}