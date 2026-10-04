import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukItem } from '../services/produk';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  produk: ProdukItem | null = null;

  constructor(private route: ActivatedRoute, private produkservice: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.produk = this.produkservice.items.find(item => item.produkId === id) ?? null;
    });
  }

  get untung(): number {
    return this.produk ? this.produk.hargaJual - this.produk.hargaBeli : 0;
  }

}
