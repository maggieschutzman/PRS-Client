import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@svc/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  title: string = 'Product Detail';

  
  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the id from the request,
    //get the associated vendor record
    this.route.params.subscribe(parms => {
      this.productSvc.get(parms.id).subscribe(resp => {
        this.product = resp as Product;
        console.log('product detail'+this.product.id);
      })
    });
  }
  remove() {
    this.productSvc.delete(this.product.id).subscribe(resp => {
      alert('Product '+this.product.name+ ' successfully deleted!');
      this.router.navigateByUrl('/product/list');
    },
    err => {
      console.log('error product user');
      console.log(err);
    });
  }


}
