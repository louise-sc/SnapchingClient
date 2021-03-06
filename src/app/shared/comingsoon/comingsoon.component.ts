import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private title: Title,
    private meta: Meta, ) {
   }

  ngOnInit() {
    this.title.setTitle( this.route.snapshot.data['title']);
  }
}
