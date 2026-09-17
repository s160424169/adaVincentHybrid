import { Component, OnInit } from '@angular/core';
import { Keranjang } from '../services/keranjang';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  bump: number | null = null;

  constructor(public keranjang: Keranjang, private transaksi: Transaksi) { }

  ngOnInit() {
  }
  tambah(item: Keranjang['items'][number]) {
    this.keranjang.tambahQty(item);
    this.mainkanBump(item.produkId);
  }

  kurang(item: Keranjang['items'][number]) {
    this.keranjang.kurangQty(item);
    this.mainkanBump(item.produkId);
  }

  mainkanBump(id: number) {
    this.bump = id;
    setTimeout(() => { this.bump = null; }, 200);
  }

  hapus(item: Keranjang['items'][number], slidingItem: any) {
    this.keranjang.hapus(item.produkId);
    slidingItem.close();
  }

  konfirmasi() {
    this.transaksi.konfirmasi(this.keranjang.items, this.keranjang.totalHarga);
    this.keranjang.kosongkan();
  }

}
