import { Injectable } from '@angular/core';

export interface ProdukItem {
    produkId: number;
    nama: string;
    gambar: string;
    hargaJual: number;
    stok: number;
    qty: number;
    kategori: string
}

@Injectable({
    providedIn: 'root'
})
export class Produk {
    items: ProdukItem[] = [
        {
            produkId: 1,
            nama: 'Indomie Goreng',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-tszajRi_hL60HCCqrKA-M83AruEGiKT-d8B4HTt9A&s=10',
            hargaJual: 3500,
            stok: 40,
            qty: 2,
            kategori: "Makanan"
        },
        {
            produkId: 2,
            nama: 'Beras Rojolele 5kg',
            gambar: '',
            hargaJual: 65000,
            stok: 5,
            qty: 1,
            kategori: "Sembako"
        },
        {
            produkId: 3,
            nama: 'Minyak Goreng 1L',
            gambar: '',
            hargaJual: 18000,
            stok: 2,
            qty: 1,
            kategori: "Sembako"
        },
    ];

    tambahProduk(p_nama: string, p_hargaJual: number, p_stok: number, p_kategori: string) {
        const p_id = this.items.length + 1;
        this.items.push({
            produkId: p_id,
            nama: p_nama,
            gambar: 'assets/default.jpg',
            hargaJual: p_hargaJual,
            stok: p_stok,
            qty: 1,
            kategori: p_kategori
        });
    }
    editProduk(p_id: number, p_nama: string, p_hargaJual: number, p_stok: number, p_kategori: string) {
        const item = this.items.find(data => data.produkId === p_id);

        if (item) {
            item.nama = p_nama;
            item.hargaJual = p_hargaJual;
            item.stok = p_stok;
            item.kategori = p_kategori;
        }
    }
}
