import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../services/produk';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  id = 0
  items: any[] = [];

  constructor(private route: ActivatedRoute, private produkservice: Produk) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.items = this.produkservice.items
      this.id = params['id']
    })
  }

}
