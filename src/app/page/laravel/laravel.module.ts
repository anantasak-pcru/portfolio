import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaravelPageRoutingModule } from './laravel-routing.module';

import { LaravelPage } from './laravel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaravelPageRoutingModule
  ],
  declarations: [LaravelPage]
})
export class LaravelPageModule {}
