import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor() { }

  // Blog Carousel
  public productDescriptions = [{
    image: 'assets/images/icons/easy.png',
    title: 'Easy to Use',
    postedBy: 'No Application Required. Snapching will find the best coupon for you while you shop ',
  }, {
    image: 'assets/images/icons/lock.png',
    title: 'Data Security',
    postedBy: 'Snapching will maintain a unique security context for Shoppers within the system',
  }, {
      image: 'assets/images/icons/feedback.png',
      title: 'Customer service feedback',
      postedBy: 'Snapching allows shoppers to provide service feedback based on their merchant experience',
    }
  ];
}
