import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { 

  }

  getArtistas( termino:string ){
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    //Observable
    return this.http.get( url ).map(res => {
      this.artistas = res.json().artists.items;
    });
  }

  getArtista( id:string ){
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    //Observable
    return this.http.get( url )
        .map( res => {
            console.log(res.json());
            return res.json();
        });
  }

}