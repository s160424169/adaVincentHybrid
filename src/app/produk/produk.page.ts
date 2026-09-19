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
  kolom: number = 1;
  notifikasi: string = '';
  tampilNotif: boolean = false;

  
  constructor(
    private produkservice: Produk,
    public keranjangService: Keranjang // Inject service keranjang
  ) { }
  
  ngOnInit() {
    this.items = this.produkservice.items;
  }
  setKolom(jumlah: number) {
    this.kolom = jumlah;
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
      this.keranjangService.tambahkan(barang);
      barang.stok -= 1;
      this.notifikasi = barang.nama + ' ditambahkan ke keranjang';
      this.tampilNotif = true;
      setTimeout(() => { this.tampilNotif = false; }, 1500);
    }
  }

  jumlahDiKeranjang(barang: any): number {
    const ada = this.keranjangService.items.find((i: any) => i.produkId === barang.produkId);
    return ada ? ada.qty : 0;
  }

  tambahDariProduk(barang: any) {
    const item = this.keranjangService.items.find((i: any) => i.produkId === barang.produkId);
    if (item) this.keranjangService.tambahQty(item);
  }

  kurangDariProduk(barang: any) {
    const item = this.keranjangService.items.find((i: any) => i.produkId === barang.produkId);
    if (item) {
      if (item.qty <= 1) {
        this.keranjangService.hapus(item.produkId);
      } else {
        this.keranjangService.kurangQty(item);
      }
    }
  }

  
}