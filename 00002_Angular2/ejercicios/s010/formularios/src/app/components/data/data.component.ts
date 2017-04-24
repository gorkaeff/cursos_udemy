import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto: {
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: "fernando.herrera85@gmail.com"
  }

  constructor(  ) {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required)
      }),
      
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])
    });

    this.forma.setValue(this.usuario);
  }

  guardarCambios(){
    console.log(this.forma.value);
    //SESION 159 - Formas para resetear datas
    //this.forma.setValue(this.usuario);
    //this.forma.reset(this.usuario);
    /*
    this.forma.reset({
      nombrecompleto:{
        nombre: "",
        apellido: ""
      },
      correo:""
    });
    */
    //this.forma.controls['correo'].setValue("Nuevocorreo@asdasd.com");
  }

}
