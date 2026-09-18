import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Keranjang {
  items: any[] = []

  tambahkan(item: any) {
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

  tambahQty(item: any) {
    if (item.qty < item.stok) item.qty++;
  }

  kurangQty(item: any) {
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