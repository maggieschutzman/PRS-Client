import { Component, OnInit } from '@angular/core';
import { Request } from '@model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '@svc/request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
request: Request = new Request();
title: string = 'Request-Detail';

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      //get the id from the request,
      //get the associated vendor record
      this.route.params.subscribe(parms => {
        this.requestSvc.get(parms.id).subscribe(resp => {
          this.request = resp as Request;
          console.log('request detail'+this.request.id);
        })
      });
    }
    remove() {
      this.requestSvc.delete(this.request.id).subscribe(resp => {
        alert('Request '+this.request.id+ ' successfully deleted!');
        this.router.navigateByUrl('/request/list');
      },
      err => {
        console.log('error product user');
        console.log(err);
      });
    }
  
  
  }
  
