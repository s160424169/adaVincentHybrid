import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Transaksi {
  riwayat: any[] = [];
  private urutan = 1;

  konfirmasi(items: any[], total: number) {
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

  get produkTerlaris(): string {
    const agregat: { [nama: string]: number } = {};
    this.riwayat.forEach(trx => {
      trx.items.forEach((item: any) => {
        agregat[item.nama] = (agregat[item.nama] || 0) + item.qty;
      });
    });
    const nama = Object.keys(agregat);
    if (nama.length === 0) return '-';
    return nama.reduce((a, b) => agregat[a] > agregat[b] ? a : b);
  }
}