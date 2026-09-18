import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  items: any[] = []
  constructor(private produkservice: Produk) { }

  ngOnInit() {
    this.items = this.produkservice.items
  }

}
