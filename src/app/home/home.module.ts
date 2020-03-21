import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { IntroComponent } from './home-sections/intro/intro.component';
import { AboutComponent } from './home-sections/about/about.component';
import { FeatureComponent } from './home-sections/feature/feature.component';
import { MerchantFeatureComponent } from './pages/merchant-services/merchant-feature/merchant-feature.component';
import { TestimonialComponent } from './home-sections/testimonial/testimonial.component';
import { EmailUsComponent } from './pages/merchant-services/email-us/email-us.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {SignInMerchantComponent} from './pages/sign-in-merchant/sign-in-merchant.component';
import {MerchantServicesComponent} from './pages/merchant-services/merchant-services.component';
import {MerchantIntroComponent} from './pages/merchant-services/merchant-intro/merchant-intro.component';
import {ForgetPasswordComponent} from './pages/forget-password/forget-password.component';
import {ComingsoonComponent} from '../shared/comingsoon/comingsoon.component';
import { ProductComponent } from './home-sections/product/product.component';
import { MerchantDetailComponent } from './pages/merchant-services/merchant-detail/merchant-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    AboutComponent,
    FeatureComponent,
    MerchantFeatureComponent,
    TestimonialComponent,
    EmailUsComponent,
    ForgetPasswordComponent,
    SignInComponent,
    SignUpComponent,
    SignInMerchantComponent,
    MerchantServicesComponent,
    MerchantIntroComponent,
    ProductComponent,
    MerchantDetailComponent
  ],
  exports: [
    MerchantFeatureComponent,
    EmailUsComponent
  ],
  providers: []
})
export class HomeModule { }
