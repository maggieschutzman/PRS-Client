import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product.class';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor.class';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  title = 'Product Edit';
  id: number;
  product: Product;
  vendors: Vendor[];
  loggedInUser: User;
  constructor(private prdSvc: ProductService,
              private vndrSvc: VendorService,
              private systemSvc: SystemService,
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
    if(this.loggedInUser.isAdmin == true) {

    this.route.params.subscribe(params => this.id = params.id);
    this.prdSvc.get(this.id).subscribe(resp => {
      this.product = resp as Product;
      this.vndrSvc.list().subscribe(jresp => {
        this.vendors = jresp as Vendor[];
      });
    });
  }
  }
  edit() {
    if (this.systemSvc.isAdmin) {
      this.prdSvc.edit(this.product).subscribe(resp => {
      this.product = resp as Product;
      this.router.navigate(['/product/list']);
     });
    }
  }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
}
