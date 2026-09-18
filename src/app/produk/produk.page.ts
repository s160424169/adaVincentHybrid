import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';
import { Keranjang } from '../services/keranjang';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  items: any[] = [];
  kataKunciCari: string = '';

  constructor(
    private produkservice: Produk,
    private keranjangService: Keranjang // Inject service keranjang
  ) { }

  ngOnInit() {
    this.items = this.produkservice.items;
  }

  // Getter memfilter array secara otomatis (real-time filtering)
  get filteredItems() {
    if (!this.kataKunciCari) {
      return this.items;
    }
    return this.items.filter(barang => 
      barang.nama.toLowerCase().includes(this.kataKunciCari.toLowerCase()) ||
      barang.kategori.toLowerCase().includes(this.kataKunciCari.toLowerCase())
    );
  }

  tambahKeKeranjang(barang: any) {
    if (barang.stok > 0) {
      this.keranjangService.tambahkan(barang); // Lempar ke service keranjang
      barang.stok -= 1; // Kurangi stok etalase agar langsung terlihat pembaruannya
    }
  }
}