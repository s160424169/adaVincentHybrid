import { Injectable } from '@angular/core';
import { Produk } from './produk'; // Import service Produk

@Injectable({ providedIn: 'root' })
export class Keranjang {
  items: any[] = [];

  // Inject Produk service untuk memperbarui stok utama
  constructor(private produkService: Produk) {}

  tambahkan(item: any) {
    const ada = this.items.find(i => i.produkId === item.produkId);
    if (ada) {
      ada.qty++;
    } else {
      this.items.push({ ...item, qty: 1,dipilih: true });
    }
  }

  hapus(produkId: number) {
    const itemDiKeranjang = this.items.find(i => i.produkId === produkId);
    if (itemDiKeranjang) {
      // Kembalikan semua jumlah stok barang ke daftar produk utama
      const produkAsli = this.produkService.items.find(p => p.produkId === produkId);
      if (produkAsli) {
        produkAsli.stok += itemDiKeranjang.qty;
      }
      
      // Hapus barang dari keranjang
      this.items = this.items.filter(i => i.produkId !== produkId);
    }
  }

  tambahQty(item: any) {
    const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
    // Pastikan stok asli masih ada sebelum menambah qty di keranjang
    if (produkAsli && produkAsli.stok > 0) {
      item.qty++;
      produkAsli.stok--; // Kurangi stok di daftar produk utama
    }
  }

  kurangQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      // Kembalikan 1 stok ke daftar produk utama
      const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
      if (produkAsli) {
        produkAsli.stok++;
      }
    } else if (item.qty === 1) {
      // Jika sisa 1 dan dikurangi, hapus barang dan kembalikan stoknya
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
    // Kembalikan seluruh stok barang jika transaksi dibatalkan
    this.items.forEach(item => {
      const produkAsli = this.produkService.items.find(p => p.produkId === item.produkId);
      if (produkAsli) {
        produkAsli.stok += item.qty;
      }
    });
    this.items = [];
  }
}