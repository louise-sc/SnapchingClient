import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.scss']
})
export class MerchantDetailComponent implements OnInit {

  constructor() { }

  solutions = [
    {
      title: 'Promote your products effectively',
      description: 'Snapching is the most efficient and effective in-store advertising platform. ' +
          'Customers who text the keyword found in-store will instantly ' +
          'receive the current promotion which will engage customers '
    },
    {
      title: 'Get to know your customers',
      description: 'Snapching captures customer data for you which you can use to drive sales'
    },
    {
      title: 'Get instant customer feedback',
      description: 'Snapching allows customers to rate their merchant experience with just one text, saving you time and money.'
    },
    {
      title: 'Improve results with Data Driven Decision Making',
      description: 'Use all the data we\'ve collected & find actionable insights to Boost your Business!'
    }
  ]

  ngOnInit() {
  }
}
