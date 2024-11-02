import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  anio: number;
  readonly CREADOR: string;
  
  constructor() {
    this.anio = new Date().getFullYear();
    this.CREADOR = 'Camilo Henao'.toUpperCase();
  }



}
