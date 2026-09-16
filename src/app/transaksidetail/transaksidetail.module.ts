import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { TransaksidetailPageRoutingModule } from './transaksidetail-routing.module';

import { TransaksidetailPage } from './transaksidetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaksidetailPageRoutingModule
  ],
  declarations: [TransaksidetailPage]
})
export class TransaksidetailPageModule {}
