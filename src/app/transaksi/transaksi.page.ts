import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit, ViewWillEnter {

  constructor(public transaksi: Transaksi, private cdr: ChangeDetectorRef) { }
  
  ionViewWillEnter() {
    // Memaksa halaman mengambil & merender ulang daftar transaksi
    this.cdr.detectChanges();
  }
  ngOnInit() {
  }

}
