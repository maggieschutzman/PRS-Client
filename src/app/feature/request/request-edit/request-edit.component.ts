import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { RequestService } from '@svc/request.service';
import { UserService } from '@svc/user.service';
import { Request } from '@model/request.class';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = 'Request Edit';
  id: number;
  request: Request;
  user: User[];
  loggedInUserId: User["id"];
  loggedInUser: User;

  constructor(private requestSvc: RequestService, 
              private userSvc: UserService,
              private systemSvc: SystemService,
              private router: Router, 
              private route: ActivatedRoute) { }

    ngOnInit() {
      this.loggedInUser = this.systemSvc.getLoggedInUser();
      console.log("Logged in user is: ", this.loggedInUser);
      
      this.route.params.subscribe(params => this.id = params.id);
      this.requestSvc.get(this.id).subscribe(resp => {
      this.request = resp as Request;
      this.userSvc.list().subscribe(jresp => {
          this.user = jresp as User[];
        });
      });
    }
  
  
    edit() {
   
      this.requestSvc.edit(this.request).subscribe(resp => {
      this.request = resp as Request;
      this.router.navigate(['/request/list']);
      });
    }
  
    compareFn(v1: number, v2: number): boolean {
      return v1 === v2;
    }
  }