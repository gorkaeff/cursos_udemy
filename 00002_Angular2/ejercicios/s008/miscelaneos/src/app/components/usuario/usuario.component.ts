import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//lifecicle hooks - buscar en angular.io

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor( private router:ActivatedRoute ) {
    this.router.params.subscribe(parametros => {
      console.log("Ruta PADRE Usuario");
      console.log(parametros);
    });
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
