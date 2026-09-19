import { Component } from '@angular/core';
import { Tema } from './services/tema';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(public tema: Tema) {}

}