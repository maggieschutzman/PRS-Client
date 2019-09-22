import { Component, OnInit } from '@angular/core';
import { Vendor } from '@model/vendor.class';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { VendorService } from '@svc/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})

export class VendorCreateComponent implements OnInit {
vendor: Vendor = new Vendor();
title: string = 'Vendor Create';

  constructor(private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }
  create() {
    this.vendorSvc.create(this.vendor).subscribe( resp => {
        //success
        alert('Vendor '+this.vendor.name+ ' successfully created!');
        console.log(resp);
        this.router.navigateByUrl('vendors/list');
    },
    err => {
      //error
      console.log(err)
    }
    );
  }
}
