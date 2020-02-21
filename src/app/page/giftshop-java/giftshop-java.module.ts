import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftshopJavaPageRoutingModule } from './giftshop-java-routing.module';

import { GiftshopJavaPage } from './giftshop-java.page';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GiftshopJavaPageRoutingModule
  ],
  declarations: [GiftshopJavaPage]
})
export class GiftshopJavaPageModule {}
