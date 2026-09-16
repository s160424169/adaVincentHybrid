import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { KeranjangPageRoutingModule } from './keranjang-routing.module';

import { KeranjangPage } from './keranjang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeranjangPageRoutingModule
  ],
  declarations: [KeranjangPage]
})
export class KeranjangPageModule {}
