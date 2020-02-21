import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViuPageRoutingModule } from './viu-routing.module';

import { ViuPage } from './viu.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViuPage]
})
export class ViuPageModule {}
