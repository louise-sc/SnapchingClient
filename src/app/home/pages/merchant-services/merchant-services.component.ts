import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-merchant-services',
  templateUrl: './merchant-services.component.html',
  styleUrls: ['./merchant-services.component.scss']
})
export class MerchantServicesComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private title: Title,
               private meta: Meta, ) {
  }

  ngOnInit() {
    this.title.setTitle( this.route.snapshot.data['title']);
  }
}
