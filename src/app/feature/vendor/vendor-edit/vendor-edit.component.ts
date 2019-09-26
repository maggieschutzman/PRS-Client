import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Edit';
loggedInUser: User;

  constructor(private vendorSvc: VendorService,
    private systemSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
    if(this.loggedInUser.isAdmin == true) {
    this.route.params.subscribe(parms => {
    this.vendorSvc.get(parms.id).subscribe(resp => {
    this.vendor = resp as Vendor;
    console.log('vendor edit: '+this.vendor.id);
      })
    });
  }
  }
  edit() {
    this.vendorSvc.edit(this.vendor).subscribe( resp => {
    console.log(resp);
    this.router.navigateByUrl('/vendor/list');
    },
    err => {
    console.log(err)
    });
  }
}
