import { Injectable } from '@angular/core';
import { Produk } from './produk';

@Injectable({ providedIn: 'root' })
export class Keranjang {
  items: any[] = [];

  constructor(private produkService: Produk) { }

  tambahkan(item: any) {
    const ada = this.items.find(i => i.produkId === item.produkId);
    if (ada) {
      ada.qty++;
    } else {
      this.items.push({ ...item, qty: 1, dipilih: true });
    }
    this.items = [...this.items];
  }

  hapus(produkId: number) {
    const itemDiKeranjang = this.items.find(i => i.produkId === produkId);
    if (itemDiKeranjang) {
      const produkAsli = this.produkService.items.find(p => p.produkId === produkId);
      if (produkAsli) {
        produkAsli.stok += itemDiKeranjang.qty;
      }

      this.items = this.items.filter(i => i.produkId !== produkId);
    }
  }

  tambahQty(item: any) {
    const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
    if (produkAsli && produkAsli.stok > 0) {
      item.qty++;
      produkAsli.stok--;
    }
  }

  kurangQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
      if (produkAsli) {
        produkAsli.stok++;
      }
    } else if (item.qty === 1) {
      this.hapus(item.produkId);
    }
  }

  get totalHarga(): number {
    return this.items.filter(i => i.dipilih).reduce((total, i) => total + i.hargaJual * i.qty, 0);
  }

  get jumlahItem(): number {
    return this.items.filter(i => i.dipilih).reduce((total, i) => total + i.qty, 0);
  }

  get jumlahDipilih(): number {
    return this.items.filter(i => i.dipilih).length;
  }

  kosongkan() {
    this.items.forEach(item => {
      const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
      if (produkAsli) {
        produkAsli.stok += item.qty;
      }
    });
    this.items = [];
  }
}