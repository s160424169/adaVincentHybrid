import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Tema {
  daftarPalet = [
    {
      nama: 'hijau-kuning',
      label: 'Hijau Kuning',
      primary: '#1e7e34',
      shade: '#1b702f',
      tint: '#368f4b',
      contrast: '#ffffff',
      sekunder: '#ffc107',
      sekunderShade: '#e0a900',
      sekunderTint: '#ffc721',
      sekunderContrast: '#000000'
    },
    {
        nama: 'biru-klasik',
        label: 'Biru',
        primary: '#1565c0',
        shade: '#1259a9',
        tint: '#2c75c6',
        contrast: '#ffffff',
        sekunder: '#90caf9',
        sekunderShade: '#7eb3dc',
        sekunderTint: '#9ad0fa',
        sekunderContrast: '#000000'
    },
    {
        nama: 'merah-cabai', 
        label: 'Merah',
        primary: '#c62828',
        shade: '#ad2222',
        tint: '#ca3d3d',
        contrast: '#ffffff',
        sekunder: '#ffb300',
        sekunderShade: '#df9d00',
        sekunderTint: '#ffb91a',
        sekunderContrast: '#000000'
    },
    {
        nama: 'ungu-senja', 
        label: 'Ungu', 
        primary: '#6a1b9a',
        shade: '#5d1888',
        tint: '#762fa4',
        contrast: '#ffffff',
        sekunder: '#ce93d8',
        sekunderShade: '#b581bd',
        sekunderTint: '#d19cda',
        sekunderContrast: '#000000'
    },
  ];
  // daftarPalet = [
  //   {
  //     nama: 'hijau-kuning',
  //     label: 'Hijau Kuning',
  //     primary: 'green',
  //     shade: 'darkgreen',
  //     tint: 'lightgreen',
  //     contrast: 'black'
  //   },
  //   {
  //     nama: 'biru-klasik',
  //     label: 'Biru Klasik',
  //     primary: 'blue',
  //     shade: 'darkblue',
  //     tint: 'lightskyblue',
  //     contrast: 'white'
  //   },
  //   {
  //     nama: 'merah-cabai',
  //     label: 'Merah Cabai',
  //     primary: 'red',
  //     shade: 'darkred',
  //     tint: 'lightcoral',
  //     contrast: 'white'
  //   },
  //   {
  //     nama: 'ungu-senja',
  //     label: 'Ungu Senja',
  //     primary: 'purple',
  //     shade: 'indigo',
  //     tint: 'mediumpurple',
  //     contrast: 'white'
  //   },
  // ];


  paletAktif = 'hijau-kuning';
  modeGelap = false;

  constructor() {
    this.terapkanPalet(this.daftarPalet[0]);
  }

  pilihPalet(p: any) {
    this.paletAktif = p.nama;
    this.terapkanPalet(p);
  }

  private terapkanPalet(p: any) {
    const root = document.documentElement.style;
    root.setProperty('--ion-color-primary', p.primary);
    root.setProperty('--ion-color-primary-shade', p.shade);
    root.setProperty('--ion-color-primary-tint', p.tint);
    root.setProperty('--ion-color-primary-contrast', p.contrast);
    root.setProperty('--ion-color-secondary', p.sekunder);
    root.setProperty('--ion-color-secondary-shade', p.sekunderShade);
    root.setProperty('--ion-color-secondary-tint', p.sekunderTint);
    root.setProperty('--ion-color-secondary-contrast', p.sekunderContrast);
  }

  toggleGelap(aktif: boolean) {
    this.modeGelap = aktif;
    document.documentElement.classList.toggle('ion-palette-dark', this.modeGelap);
  }
}