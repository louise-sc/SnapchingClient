import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LandingFixService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  // Home Page One
  public addFixOne() {
     this.document.body.classList.add('home-style-one');
  }

  public removeFixOne() {
     this.document.body.classList.remove('home-style-one');
  }
}
