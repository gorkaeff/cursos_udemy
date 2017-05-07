import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MapasService } from "./services/mapas.service";
import { Marcador } from "./interfaces/marcador.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 42.671270;
  lng: number = -2.032335;
  zoom: number = 16;

  marcadorSel:any = null;
  draggable:string="1";

  constructor(private translate: TranslateService, public _ms:MapasService ){
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    this._ms.cargarMarcadores();
  }

  clickMapa( evento ){

    let nuevoMarcador:Marcador ={
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin titulo",
      draggable: true
    }

    this._ms.insertarMarcador( nuevoMarcador );

  }

  clickMarcador(marcador:Marcador, i:number){
    console.log(marcador, i);
    this.marcadorSel = marcador;

    if( this.marcadorSel.draggable ){
      this.draggable = "1";
    }else{
      this.draggable = "0";
    }
  }

  cambiarDraggable(){
    console.log(this.draggable);
    if( this.draggable == "1" ){
      this.marcadorSel.draggable = true;
    }else{
      this.marcadorSel.draggable = false;
    }
  }


  dragEndMarcador( marcador:Marcador, evento ){
    // console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }

}
