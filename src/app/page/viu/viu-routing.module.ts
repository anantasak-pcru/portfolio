import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViuPage } from './viu.page';

const routes: Routes = [
  {
    path: '',
    component: ViuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViuPageRoutingModule {}
