import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  title = 'Product Create';
  product: Product = new Product();
  vendors: Vendor[];
  loggedInUser: User;
 vendorid: Vendor['id'];
  vendor: Vendor;

  constructor(private prodSvc: ProductService, 
              private vndrSvc: VendorService,
              private systemSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
    if(this.loggedInUser.isAdmin==true) {
    this.vndrSvc.list().subscribe(resp => {
    this.vendors = resp as Vendor[];
    });
  }
}

  create() {
    this.prodSvc.create(this.product).subscribe(resp => {
      this.product = resp});
      this.router.navigate(['product/list']);
      console.log('Product successfully created!');

  }
}
