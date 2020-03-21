import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignInMerchantComponent} from './pages/sign-in-merchant/sign-in-merchant.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {MerchantServicesComponent} from './pages/merchant-services/merchant-services.component';
import {ForgetPasswordComponent} from './pages/forget-password/forget-password.component';
import {ComingsoonComponent} from '../shared/comingsoon/comingsoon.component';

const titlePage = 'Snapching - ';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Snapching'
    }
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {
      title: titlePage + 'Sign-In'
    }
  },
  {
    path: 'sign-in-merchant',
    component: SignInMerchantComponent,
    data: {
      title: titlePage + 'Merchant Sign-In'
    }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      title: titlePage +  'Sign-Up'
    }
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    data: {
      title: titlePage + 'Forget Password'
    }
  },
  {
    path: 'coming-soon',
    component: ComingsoonComponent,
    data: {
      title: titlePage + 'Coming Soon'
    }
  },
  {
    path: 'merchant-services',
    component: MerchantServicesComponent,
    data: {
      title: titlePage + 'Merchant Services'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
