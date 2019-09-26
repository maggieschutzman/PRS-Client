import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor.class';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { VendorService } from '@svc/vendor.service';
import { SystemService } from '@svc/system.service';
import { User } from '@model/user.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})

export class VendorCreateComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Create';
loggedInUser: User;

  constructor(private vendorSvc: VendorService,
              private systemSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log("Logged in user is: ", this.loggedInUser);
  }
  create() {
        this.vendorSvc.create(this.vendor).subscribe( resp => {
        console.log('Vendor '+this.vendor.name+ ' successfully created!');
        console.log(resp);
        this.router.navigateByUrl('vendor/list');
    },
    err => {
      //error
      console.log(err)
    }
    );
  }
}

