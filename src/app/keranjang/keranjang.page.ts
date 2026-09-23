import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { Keranjang } from '../services/keranjang';
import { Transaksi } from '../services/transaksi';
import { Produk } from '../services/produk';

interface ItemKeranjang {
  produkId: number;
  nama: string;
  gambar: string;
  hargaJual: number;
  stok: number;
  qty: number;
}

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {
  bumpId: any = null;

  constructor(public keranjang: Keranjang, private transaksi: Transaksi, private produk: Produk,
     private router: Router) { }

  ngOnInit() {
    // if (this.keranjang.items.length === 0) {
    //   this.produk.items.forEach((item) => {
    //     this.keranjang.tambahkan(item);
    //   });
    // }
  }

  tambah(item: ItemKeranjang) {
    this.keranjang.tambahQty(item);
    this.mainkanBump(item.produkId);
  }

  kurang(item: ItemKeranjang) {
    this.keranjang.kurangQty(item);
    this.mainkanBump(item.produkId);
  }

  mainkanBump(id: number) {
    this.bumpId = id;
    setTimeout(() => { this.bumpId = null; }, 200);
  }

  hapus(item: ItemKeranjang, slidingItem: any) {
    this.keranjang.hapus(item.produkId);
    slidingItem.close();
  }

  konfirmasi() {
  const dipilih = this.keranjang.items.filter(i => i.dipilih);
  this.transaksi.konfirmasi(dipilih, this.keranjang.totalHarga);
  this.keranjang.items = this.keranjang.items.filter(i => !i.dipilih);
   this.router.navigateByUrl('/transaksi'); 
}

}
