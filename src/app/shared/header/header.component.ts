import { Component, HostListener, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../services/windows.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  public isOpenMobile = false;
  public darkHeader = false;

  constructor(
               @Inject(DOCUMENT) private document: Document,
               @Inject(WINDOW) private window,

  ) { }
  // @HostListener Decorator
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number >= 60) {
      this.darkHeader = true;
    } else {
      this.darkHeader = false;
    }
}

}
