import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.class';
import { RequestLine } from '@model/requestLine.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestLineService } from '@svc/request-line.service';
import { Request } from '@model/request.class';
import { SystemService } from '@svc/system.service';
import { RequestService } from '@svc/request.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})

export class RequestLineEditComponent implements OnInit {
  title: string = 'RequestLine Edit';

  id: number; 
  requestlineid: number; 
  resp: any;
  requestline: RequestLine;
  requestlines: RequestLine[];
  products: Product[];
  product: Product;
  request: Request;

  constructor(private requestlineSvc: RequestLineService,
              private productSvc: ProductService,
              private systemSvc: SystemService,
              private requestSvc: RequestService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(parms => {
      this.requestlineid = parms["id"];
     
      });
      this.requestlineSvc.get(this.requestlineid).subscribe(requestline => {
      this.requestline = requestline;
      })
      this.productSvc.list().subscribe(products => {
      this.products = products;
        }
      );
    }
     

  compareFn(u1: Product, u2: Product) {
    return u1 && u2 ? u1.id == u2.id : u1 == u2;
}

  edit() {
    this.requestlineSvc.edit(this.requestline).subscribe(resp => {
    this.resp = resp;
    console.log('Edit Success!')
    this.router.navigateByUrl('/request/list');
     });
  }
}

