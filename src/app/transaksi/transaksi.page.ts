import { Component, OnInit } from '@angular/core';  
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  constructor(public transaksi: Transaksi) { }

  ngOnInit() {
  }

}
