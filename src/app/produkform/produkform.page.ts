import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produkform',
  templateUrl: './produkform.page.html',
  styleUrls: ['./produkform.page.scss'],
  standalone: false,
})
export class ProdukformPage implements OnInit {
  edit: boolean = false;
  id: number = 0;
  submitted: boolean = false;

  disentuh: { [kolom: string]: boolean } = {};

  produk: any = this.produkKosong();

  kategoriPilihan: string = '';
  kategoriLainnya: string = '';
  kategori: string[] = ["Makanan", "Minuman", "Snack"]

  constructor(private produkservice: Produk, private route: ActivatedRoute, private router: Router) { }

  produkKosong() {
    return {
      nama: '',
      hargaBeli: null,
      hargaJual: null,
      stok: null,
      kategori: '',
      gambar: ''
    };
  }

  sentuh(kolom: string) {
    this.disentuh[kolom] = true;
  }

  onKategoriSelectChange() {
    this.sentuh('kategori');
    if (this.kategoriPilihan !== 'Lainnya') {
      this.kategoriLainnya = '';
      this.produk.kategori = this.kategoriPilihan;
    } else {
      this.produk.kategori = this.kategoriLainnya;
    }
  }

  onKategoriLainnyaInput() {
    if (this.kategoriPilihan === 'Lainnya') {
      this.produk.kategori = this.kategoriLainnya;
    }
  }

  kolomTidakValid(kolom: string): boolean {
    const p = this.produk;

    if (kolom === 'nama') {
      const nama = (p.nama ?? '').toString().trim();
      return nama === '' || /^\d+$/.test(nama);
    }
    if (kolom === 'hargaBeli') {
      return p.hargaBeli === null || p.hargaBeli === '' || Number(p.hargaBeli) < 1;
    }
    if (kolom === 'hargaJual') {
      return p.hargaJual === null || p.hargaJual === '' || Number(p.hargaJual) < 1;
    }
    if (kolom === 'stok') {
      return p.stok === null || p.stok === '' || Number(p.stok) < 0;
    }
    if (kolom === 'kategori') {
      const kategori = (p.kategori ?? '').toString().trim();
      return kategori === '' || /\d/.test(kategori);
    }

    return false;
  }

  isSalah(kolom: string): boolean {
    return this.kolomTidakValid(kolom) && (this.disentuh[kolom] || this.submitted);
  }

  formValid(): boolean {
    if (this.kolomTidakValid('nama')) return false;
    if (this.kolomTidakValid('hargaBeli')) return false;
    if (this.kolomTidakValid('hargaJual')) return false;
    if (this.kolomTidakValid('stok')) return false;
    if (this.kolomTidakValid('kategori')) return false;
    return true;
  }

  isiFormUntukEdit(id: number) {
    const dataProduk = this.produkservice.items.find(item => item.produkId === id);
    if (dataProduk) {
      this.produk = {
        nama: dataProduk.nama,
        hargaBeli: dataProduk.hargaBeli,
        hargaJual: dataProduk.hargaJual,
        stok: dataProduk.stok,
        kategori: dataProduk.kategori,
        gambar: dataProduk.gambar
      };

      if (this.kategori.includes(dataProduk.kategori)) {
        this.kategoriPilihan = dataProduk.kategori;
        this.kategoriLainnya = '';
      } else {
        this.kategoriPilihan = 'Lainnya';
        this.kategoriLainnya = dataProduk.kategori;
      }
    }
  }

  resetForm() {
    this.produk = this.produkKosong();
    this.kategoriLainnya = ''
    this.kategoriPilihan = ''
    this.disentuh = {};
    this.submitted = false;
  }

  simpanProduk() {
    this.submitted = true;

    if (this.formValid()) {
      const val = this.produk;

      if (this.edit && this.id !== 0) {
        this.produkservice.editProduk(
          this.id,
          val.nama,
          Number(val.hargaBeli),
          Number(val.hargaJual),
          Number(val.stok),
          val.kategori,
          val.gambar
        );
      } else {
        this.produkservice.tambahProduk(
          val.nama,
          Number(val.hargaBeli),
          Number(val.hargaJual),
          Number(val.stok),
          val.kategori,
          val.gambar
        );
      }
    }
    this.resetForm();
    this.router.navigate(['/produk']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id']);
        this.edit = true;
        this.isiFormUntukEdit(this.id);
      } else {
        this.edit = false;
        this.id = 0;
        this.resetForm();
      }
    });
  }
}