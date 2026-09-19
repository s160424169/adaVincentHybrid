import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produk } from '../services/produk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produkform',
  templateUrl: './produkform.page.html',
  styleUrls: ['./produkform.page.scss'],
  standalone: false,
})
export class ProdukformPage implements OnInit {
  produkForm!: FormGroup;
  edit: boolean = false;
  id: number = 0;

  constructor(private produkservice: Produk, private route: ActivatedRoute, private router: Router) { }

  isSalah(namaKolom: string): boolean {
    const kolom = this.produkForm.get(namaKolom);
    return !!(kolom && kolom.invalid && (kolom.touched || kolom.dirty || this.produkForm.touched));
  }

  inisiasiForm() {
    this.produkForm = new FormGroup({
      nama: new FormControl("", [Validators.required]),
      hargaBeli: new FormControl(null, [Validators.required, Validators.min(1)]),
      hargaJual: new FormControl(null, [Validators.required, Validators.min(1)]),
      stok: new FormControl(null, [Validators.required, Validators.min(0)]),
      kategori: new FormControl("", [Validators.required]),
      gambar: new FormControl("") // Tambahan form control untuk gambar (opsional)
    });
  }

  isiFormUntukEdit(id: number) {
    const dataProduk = this.produkservice.items.find(item => item.produkId === id);
    if (dataProduk) {
      this.produkForm.patchValue({
        nama: dataProduk.nama,
        hargaBeli: dataProduk.hargaBeli,
        hargaJual: dataProduk.hargaJual,
        stok: dataProduk.stok,
        kategori: dataProduk.kategori,
        gambar: dataProduk.gambar // Mengisi input gambar saat edit
      });
    }
  }

  simpanProduk() {
    if (this.produkForm.valid) {
      const val = this.produkForm.value;

      if (this.edit && this.id !== 0) {
        this.produkservice.editProduk(
          this.id,
          val.nama,
          Number(val.hargaBeli),
          Number(val.hargaJual),
          Number(val.stok),
          val.kategori,
          val.gambar // Kirim url gambar
        );
      } else {
        this.produkservice.tambahProduk(
          val.nama,
          Number(val.hargaBeli),
          Number(val.hargaJual),
          Number(val.stok),
          val.kategori,
          val.gambar // Kirim url gambar
        );
      }
      this.produkForm.reset();
      this.router.navigate(['/produk']);
    } else {
      this.produkForm.markAllAsTouched();
    }
  }

  ngOnInit() {
    this.inisiasiForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id']);
        this.edit = true;
        this.isiFormUntukEdit(this.id);
      } else {
        this.edit = false;
        this.id = 0;
        this.produkForm.reset();
      }
    });
  }
}