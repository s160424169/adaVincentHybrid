import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksidetail',
  templateUrl: './transaksidetail.page.html',
  styleUrls: ['./transaksidetail.page.scss'],
  standalone: false,
})
export class TransaksidetailPage implements OnInit {

  trx: any = null;

  constructor(private route: ActivatedRoute, private transaksi: Transaksi) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.trx = this.transaksi.riwayat.find(t => t.id === id);
    });
  }

}
