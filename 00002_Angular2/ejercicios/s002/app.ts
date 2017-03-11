function saludar(personName:string){
    console.log("Welcome " + personName.toUpperCase());
}

let alias = "gorkaeff";
const NOMODIFICADA = "noSePuedeModificar";

if(true){
    let alias = "gorkaeff_scope2";
}

let soyString:string = "Soy String";
let numero:number = 123;
let booleano:boolean = true;
let hoy:Date = new Date();
let cualquiera:any;

var person = {
    name : "Gorka",
    surname : "Jusue",
    age : 31
}

saludar(person.name + " " + person.surname);
console.log(alias);