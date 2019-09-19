import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = new Vendor();
  title: string = 'Vendor-Detail';

  
  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the id from the request,
    //get the associated vendor record
    this.route.params.subscribe(parms => {
      this.vendorSvc.get(parms.id).subscribe(resp => {
        this.vendor = resp as Vendor;
        console.log('vendor detail'+this.vendor.id);
      })
    });
  }

  remove() {
    this.vendorSvc.delete(this.vendor.id).subscribe(resp => {
      alert('Vendor '+this.vendor.name+ ' successfully deleted!');
      this.router.navigateByUrl('/vendor/list');
    },
    err => {
      console.log('error vendor user');
      console.log(err);
    });
  }


}
