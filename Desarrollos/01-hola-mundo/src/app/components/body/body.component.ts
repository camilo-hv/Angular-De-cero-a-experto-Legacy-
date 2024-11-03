import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent {
  
  mostrar = true;

  frase:any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  personajes: string[] = ['Ironman','Capitan America','Thor']

}
