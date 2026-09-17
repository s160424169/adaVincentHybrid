import { Injectable } from '@angular/core';
import { Keranjang } from './keranjang';

@Injectable({ providedIn: 'root' })
export class Transaksi {
  riwayat: Array<{
    id: number;
    tanggal: Date;
    items: Keranjang['items'];
    total: number;
  }> = [];
  private urutan = 1;

  konfirmasi(items: Keranjang['items'], total: number) {
    const trx = {
      id: this.urutan++,
      tanggal: new Date(),
      items: items.map(i => ({ ...i })),
      total: total,
    };
    this.riwayat.unshift(trx);
    return trx;
  }

  get jumlahHariIni(): number {
    const hariIni = new Date().toDateString();
    return this.riwayat.filter(t => t.tanggal.toDateString() === hariIni).length;
  }
}