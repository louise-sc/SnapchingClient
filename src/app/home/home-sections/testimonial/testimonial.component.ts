import { Component } from '@angular/core';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

    constructor() { }

    // Testimonial Carousel
    public testimonial = [{
        image: 'assets/images/avtar/22.jpg',
        name: 'Watch for Merchants as part of our Offical Launch!',
        description: 'Coming Soon',
    }
    // , {
    //     image: 'assets/images/avtar/22.jpg',
    //     name: 'Merchant 2',
    //     description: 'Under Construction',
    // }, {
    //     image: 'assets/images/avtar/22.jpg',
    //     name: 'Merchant 3',
    //     description: 'Under Construction',
    // }
    ];

    // Testimonial Carousel Options
    public testimonialCarousel: any = {
        loop: true,
        margin: 5,
        nav: true,
        navClass: ['owl-prev', 'owl-next'],
        navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            991: {
                items: 1,
                margin: 15,
            },
            1000: {
                items: 1
            }
        }
    };

}
