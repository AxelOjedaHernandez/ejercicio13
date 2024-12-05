import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion', //hacer referencia al componente
  standalone: true, 
  imports: [], // si requerimos imports aqui va
  templateUrl: './interpolacion.component.html', // html del componente
  styleUrl: './interpolacion.component.css' // hoja de estilo del componente
})
//javascript orientado a objetos = typescript
export class InterpolacionComponent {
  mensaje: string = 'hola mundo de las interpolaciones o sustitucion de variables';
  nombre = "axel";
  edad = 21;
  correo = "aojedah1800@alumno.ipn.mx";
}
