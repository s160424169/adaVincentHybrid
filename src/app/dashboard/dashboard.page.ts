import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  constructor(public produk: Produk, public transaksi: Transaksi) { }

  ngOnInit() {
  }

}
