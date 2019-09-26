import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';
import { Request } from '@model/request.class';
import { User } from '@model/user.class';
import { SystemService } from '@svc/system.service';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {
  title = 'Request Create';
  resp: any;
  User: User;
  loggedInUser : User;
  product: Product;
  products: Product[];

  request: Request = new Request();

  constructor(private requestSvc: RequestService, 
                  private systemSvc: SystemService,
                  private userSvc: UserService,
                  private productSvc: ProductService,
                  private router: Router) { }

  ngOnInit() { 
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
    this.request.userId = this.loggedInUser.id;
  
    if (this.loggedInUser.isAdmin!==true) {
      console.log("YOU MUST BE AN ADMIN")
     }

    }
  

  create() {

    this.requestSvc.create(this.request).subscribe(resp => {
    this.request = resp});
    this.router.navigate(['request/list']);
    console.log('Request successfully created!');
    }
    
}
