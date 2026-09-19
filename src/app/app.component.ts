import { Component } from '@angular/core';
import { Tema } from './services/tema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(public tema: Tema,private router: Router) {}

  logout() {
  this.router.navigate(['/dashboard']);
  }

}