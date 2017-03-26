import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Gorka";
  nombre2 = "GorKa ApeLLido1 ApElliDo2";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  }
  video = "HVJgAciDPYY";

  valorDePromesa = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Llegaron los datos'), 3500);
  })

  myDate = "1985-09-06";
  fecha = new Date();
  activar:boolean = true;
}
