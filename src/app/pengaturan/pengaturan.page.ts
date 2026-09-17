import { Component, OnInit } from '@angular/core';
import { Tema } from '../services/tema';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {

  constructor(public tema: Tema) { }

  ngOnInit() {
  }

}
