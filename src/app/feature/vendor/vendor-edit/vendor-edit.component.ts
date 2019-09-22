import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Edit';

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get the user id from the request, 
    //get user from database
    this.route.params.subscribe(parms => {
      this.vendorSvc.get(parms.id).subscribe(resp => {
        this.vendor = resp as Vendor;
        console.log('vendor edit: '+this.vendor.id);
      })
    });
  }
  edit() {
    this.vendorSvc.edit(this.vendor).subscribe( resp => {
        //success
        console.log(resp);
        this.router.navigateByUrl('/vendor/list');
    },
    err => {
      //error
      console.log(err)
    });
  }
}
