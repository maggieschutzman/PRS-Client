import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@svc/system.service';
import { ProductService } from '@svc/product.service';
import { RequestService } from '@svc/request.service';
import { RequestLineService } from '@svc/request-line.service';
import { RequestLine } from '@model/requestLine.class';
import { Request } from '@model/request.class'

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})

export class RequestLineCreateComponent implements OnInit {
  title: string = 'RequestLine Create';

  reqid: number;
  resp: any;
  productid: Product["id"];
  product: Product;
  products: Product[];
  request: Request;
  reqline: RequestLine = new RequestLine();

 
  constructor(private reqliSvc: RequestLineService,
    private requestSvc: RequestService, 
    private productSvc: ProductService,
    private systemSvc: SystemService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.route.params.subscribe(parms => {
      this.reqid = parms["id"];
      this.requestSvc.get(this.reqid).subscribe(requests => {
      this.request = Request.length > 0 ? requests[0] : null;
          });
      });
      this.productSvc.list().subscribe(products => {
      this.products = products;
        }
      );
    }
  
  
  compareFn(u1: Product, u2: Product) {
      return u1 && u2 ? u1.id == u2.id : u1 == u2;
  }

  create() {
  this.reqline.requestid = this.reqid;
  this.reqline.productid = this.product.id;
  this.reqliSvc.create(this.reqline).subscribe(resp => {
  console.log('Requestline successfully created!');
  this.resp = resp;
  this.router.navigateByUrl('/request/list');
      });
    }
  }



