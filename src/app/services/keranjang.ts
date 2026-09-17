import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Keranjang {
  items = [
    { produkId: 1, nama: 'Indomie Goreng', gambar: '', hargaJual: 3500, stok: 40, qty: 2 },
    { produkId: 2, nama: 'Beras Rojolele 5kg', gambar: '', hargaJual: 65000, stok: 5, qty: 1 },
    { produkId: 3, nama: 'Minyak Goreng 1L', gambar: '', hargaJual: 18000, stok: 2, qty: 1 },
  ];

  tambahkan(item: Keranjang['items'][number]) {
    const ada = this.items.find(i => i.produkId === item.produkId);
    if (ada) {
      ada.qty++;
    } else {
      this.items.push({ ...item, qty: 1 });
    }
  }

  hapus(produkId: number) {
    this.items = this.items.filter(i => i.produkId !== produkId);
  }

  tambahQty(item: Keranjang['items'][number]) {
    if (item.qty < item.stok) item.qty++;
  }

  kurangQty(item: Keranjang['items'][number]) {
    if (item.qty > 1) item.qty--;
  }

  get totalHarga(): number {
    return this.items.reduce((total, i) => total + i.hargaJual * i.qty, 0);
  }

  get jumlahItem(): number {
    return this.items.reduce((total, i) => total + i.qty, 0);
  }

  kosongkan() {
    this.items = [];
  }
}