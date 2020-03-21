import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-in-merchant',
  templateUrl: './sign-in-merchant.component.html',
  styleUrls: ['./sign-in-merchant.component.scss']
})
export class SignInMerchantComponent implements OnInit {

  // variable
  show: boolean;

  constructor(private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
    // initialize variable value
    this.show = false;
  }

  // click event function toggle
  password() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.title.setTitle( this.route.snapshot.data['title']);
  }


}
