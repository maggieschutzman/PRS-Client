import { Component, OnInit } from '@angular/core';
import { Request } from '@model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';
import { SystemService } from '@svc/system.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})

export class RequestDetailComponent implements OnInit {
request: Request = new Request();
title: string = 'Request-Detail';

  constructor(private requestSvc: RequestService,
              private systemSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { }

    ngOnInit() {
          this.route.params.subscribe(parms => {
          this.requestSvc.get(parms.id).subscribe(resp => {
          this.request = resp as Request;
          console.log('request detail'+this.request.id);
        })
      });
    }
  
    remove() {
        this.requestSvc.delete(this.request.id).subscribe(resp => {
        console.log('Request '+this.request.id+ ' successfully deleted!');
        this.router.navigateByUrl('/request/list');
      },
      err => {
        console.log('error product user');
        console.log(err);
      });
    }
  } 

  
