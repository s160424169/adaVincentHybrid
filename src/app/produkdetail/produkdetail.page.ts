import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk, ProdukItem } from '../services/produk';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {

  // produk: ProdukItem | null = null; 

  produk: any = null

  constructor(private route: ActivatedRoute, private produkservice: Produk, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   const id = Number(params['id']);
    //   this.produk = this.produkservice.items.find(item => item.produkId === id) ?? null;
    // });

    this.route.params.subscribe(params => {
      this.produkservice.produkDetail(params['id']).subscribe(
        (data) => {
          this.produk = data
          this.cdr.detectChanges() 
        }
      )
    })
  }

  // get untung(): number {
  //   return this.produk ? this.produk.hargaJual - this.produk.hargaBeli : 0;
  // }

}
