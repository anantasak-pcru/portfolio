import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaravelPage } from './laravel.page';

const routes: Routes = [
  {
    path: '',
    component: LaravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaravelPageRoutingModule {}
