import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProdukItem {
    produkId: number;
    nama: string;
    gambar: string;
    hargaBeli: number;
    hargaJual: number;
    stok: number;
    qty: number;
    kategori: string;
}

@Injectable({
    providedIn: 'root'
})
export class Produk {
    private readonly http = inject(HttpClient)

    produkList(): Observable<any> {
        return this.http.get("https://ubaya.fun/hybrid/160424154/produk.php");
    }

    produkDetail(id: number): Observable<any> {
        return this.http.get("https://ubaya.fun/hybrid/160424154/produkdetail.php?id=" + id);
    }

    gambarDefault: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY6RQS0h1pKlDn9AIFSOFd4UdQIXlFksW6btQ9et8sw&s"
    items: ProdukItem[] = [
        {
            produkId: 1,
            nama: 'Indomie Goreng',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeZDXvXCMhHzA3vtYcL5IBxgUHMEgkYWJ1IF85wi7Aw&s',
            hargaBeli: 3000,
            hargaJual: 3500,
            stok: 40,
            qty: 0,
            kategori: "Makanan"
        },
        {
            produkId: 2,
            nama: 'Beras Rojolele 5kg',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1lB3JpI9fTYd0BKp2-W7Z9dbKNMTs5_qX1NddgwKgw&s=10',
            hargaBeli: 60000,
            hargaJual: 65000,
            stok: 5,
            qty: 0,
            kategori: "Sembako"
        },
        {
            produkId: 3,
            nama: 'Minyak Goreng 1L',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94D4qNwJLeeZ2bkkzAM7a5HXu4uJLwev9ZRJRu7ZTtg&s=10',
            hargaBeli: 15000,
            hargaJual: 18000,
            stok: 10,
            qty: 0,
            kategori: "Sembako"
        },
        {
            produkId: 4,
            nama: 'Gula Pasir 1kg',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDovYodqvtkIHmCSg8WTu9LarjyVy-gOCwJDsYKtcXw&s=10',
            hargaBeli: 12000,
            hargaJual: 14000,
            stok: 15,
            qty: 0,
            kategori: "Sembako"
        },
        {
            produkId: 5,
            nama: 'Kopi Kapal Api',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwbhz4rqrfbMh2Qj_DfbeHiwJ2i0gok9dgs56LMWh_A&s=10',
            hargaBeli: 1000,
            hargaJual: 1500,
            stok: 50,
            qty: 0,
            kategori: "Minuman"
        },
        {
            produkId: 6,
            nama: 'Teh Celup Sosro',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyPve1BUr7ANwKxdKosjUXm8WeO3ZzGbTzUg4AaUW9g&s=10',
            hargaBeli: 5000,
            hargaJual: 6500,
            stok: 20,
            qty: 0,
            kategori: "Minuman"
        },
        {
            produkId: 7,
            nama: 'Sabun Mandi Lifebuoy',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOUdmr66erXf7ZfNQkIqpA1FHFMqtiOCbf8gMpMy0bA&s=10',
            hargaBeli: 3500,
            hargaJual: 4500,
            stok: 30,
            qty: 0,
            kategori: "Kebutuhan Mandi"
        },
        {
            produkId: 8,
            nama: 'Sampo Clear 170ml',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoY9QuttI8lmLaTZWK7i0Bczzd-Bh1B59hsSxyPfMRw&s=10',
            hargaBeli: 22000,
            hargaJual: 25000,
            stok: 10,
            qty: 0,
            kategori: "Kebutuhan Mandi"
        },
        {
            produkId: 9,
            nama: 'Tolak Angin Cair',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel0qocX8I5eVTS-yIr1CbFbQEz1CWRm0WKxAWpG35hw&s=10',
            hargaBeli: 3500,
            hargaJual: 4000,
            stok: 25,
            qty: 0,
            kategori: "Obat"
        },
        {
            produkId: 10,
            nama: 'Roti Tawar Sariroti',
            gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzHCHeac5WN0XpCr1xbnbRXBN2KbZV53y3gLhvzuW5Q&s=10',
            hargaBeli: 13000,
            hargaJual: 15000,
            stok: 5,
            qty: 0,
            kategori: "Makanan"
        },
    ];

    tambahProduk(p_nama: string, p_hargaBeli: number, p_hargaJual: number, p_stok: number, p_kategori: string, p_gambar: string) {
        const p_id = this.items.length > 0 ? Math.max(...this.items.map(i => i.produkId)) + 1 : 1;
        this.items.push({
            produkId: p_id,
            nama: p_nama,
            gambar: p_gambar || this.gambarDefault,
            hargaBeli: p_hargaBeli,
            hargaJual: p_hargaJual,
            stok: p_stok,
            qty: 1,
            kategori: p_kategori
        });
    }

    editProduk(p_id: number, p_nama: string, p_hargaBeli: number, p_hargaJual: number, p_stok: number, p_kategori: string, p_gambar: string) {
        const item = this.items.find(data => data.produkId === p_id);
        if (item) {
            item.nama = p_nama;
            item.hargaBeli = p_hargaBeli;
            item.hargaJual = p_hargaJual;
            item.stok = p_stok;
            item.kategori = p_kategori;
            item.gambar = p_gambar || '';
        }
    }
}