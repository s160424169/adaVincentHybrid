import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Tema {
  daftarPalet = [
    { nama: 'hijau-kuning', label: 'Hijau Kuning', primary: 'green', shade: 'darkgreen', tint: 'lightgreen', contrast: 'black' },
    { nama: 'biru-klasik', label: 'Biru Klasik', primary: 'blue', shade: 'darkblue', tint: 'lightskyblue', contrast: 'white' },
    { nama: 'merah-cabai', label: 'Merah Cabai', primary: 'red', shade: 'darkred', tint: 'lightcoral', contrast: 'white' },
    { nama: 'ungu-senja', label: 'Ungu Senja', primary: 'purple', shade: 'indigo', tint: 'mediumpurple', contrast: 'white' },
  ];

  paletAktif = 'hijau-kuning';
  modeGelap = false;

  constructor() {
    this.terapkanPalet(this.daftarPalet[0]);
  }

  pilihPalet(p: Tema['daftarPalet'][number]) {
    this.paletAktif = p.nama;
    this.terapkanPalet(p);
  }

  private terapkanPalet(p: Tema['daftarPalet'][number]) {
    const root = document.documentElement.style;
    root.setProperty('--ion-color-primary', p.primary);
    root.setProperty('--ion-color-primary-shade', p.shade);
    root.setProperty('--ion-color-primary-tint', p.tint);
    root.setProperty('--ion-color-primary-contrast', p.contrast);
  }

  toggleGelap(aktif: boolean) {
    this.modeGelap = aktif;
    document.documentElement.classList.toggle('ion-palette-dark', this.modeGelap);
  }
}