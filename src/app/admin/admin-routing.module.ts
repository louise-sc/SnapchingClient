import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComingsoonComponent} from '../shared/comingsoon/comingsoon.component';

const titlePage = 'Snapching - ';

const routes: Routes = [
  {
    path: 'admin',
    component: ComingsoonComponent,
    children: [
      {
        path: 'coming-soon',
        component: ComingsoonComponent,
        data: {
          title: titlePage + 'Coming Soon'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
