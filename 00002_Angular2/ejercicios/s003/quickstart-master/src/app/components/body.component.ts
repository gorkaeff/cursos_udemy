import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  texto:string = "Un gran poder, requiere una gran responsabilidad";
  autor:string = "Ben Parker";
  mostrar:boolean = true;
  personajes:string[] = ["Spiderman", "Batman", "Capitan America", "Popeye"]
}