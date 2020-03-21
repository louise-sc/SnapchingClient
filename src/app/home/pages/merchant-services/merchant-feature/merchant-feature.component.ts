import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-merchant-feature',
  templateUrl: './merchant-feature.component.html',
  styleUrls: ['./merchant-feature.component.scss']
})
export class MerchantFeatureComponent {

  // DomSanitizer for safe html content.
  constructor(private _sanitizer: DomSanitizer) { }

  public features = [{
    image: 'assets/images/icons/merchant-easy.png',
    name: 'No Equipment Installation',
  }, {
    image: 'assets/images/icons/merchant-text.png',
    name: 'No Application Required',
  }, {
    image: 'assets/images/icons/merchant-secure.png',
    name: 'Secure Customer Data',
  }];


  public featureCarousel: any = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 5,
      },
      600: {
        items: 1,
        margin: 5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  };

}
