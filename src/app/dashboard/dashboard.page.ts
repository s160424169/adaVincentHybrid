import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Produk } from '../services/produk';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit, ViewWillEnter {

  constructor(public produk: Produk, public transaksi: Transaksi,

  ) { }
  ionViewWillEnter() {
    // Memaksa halaman memperbarui tampilan data keranjang terbaru saat tab dibuka
  }
  ngOnInit() {
  }

}
