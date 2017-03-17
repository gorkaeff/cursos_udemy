function saludar(personName:string){
    console.log("Welcome " + personName.toUpperCase());
}


function activar(quien:string, objeto:string = "Antivirus", momento?:string){
    let mensaje:string;
    if (momento){
        mensaje = `${quien} activó el ${objeto} ${momento}`;
    } else {
        mensaje = `${quien} activó el ${objeto}`;
    }
    
    console.log(mensaje);
}

activar("Gorka", "sensor", "lentamente")

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

let templatePrueba = `Hola, ${person.name} ${person.surname}, tienes ${person.age}.`;
let templatePruebaTabulada = `Hola, 
${person.name} ${person.surname}, 
tienes ${person.age}.`;

saludar(person.name + " " + person.surname);
console.log(alias);
console.log(templatePrueba);
console.log(templatePruebaTabulada);

//Funciones flecha

let testFuncion = function (sum1:number, sum2:number ){
    let suma = sum1 + sum2;
    let fivePercent = suma*0.05;
    return suma + fivePercent;
}

let testFuncionFlecha = (sum1:number, sum2:number) => {
    let suma = sum1 + sum2;
    let fivePercent = suma*0.05;
    return suma + fivePercent;
}

let hulk = {
    nombre: "Increible Hulk",
    smash(){
        setTimeout( ()=>console.log(this.nombre + " smashhhhh!!!"), 2000)
    }
}

let destructuracionDeObjetos = {
    nombre : "Gorka",
    apodo : "Gorkaeff",
    plataforma : "Github"
}

let {nombre, plataforma, apodo} = destructuracionDeObjetos;

let myArrayDestructurado:string[] = ["Pepon", "Turon", "Marlon"];
let [,,referencia3] = myArrayDestructurado;

console.log(referencia3);

console.log(testFuncion(40,60));
console.log(testFuncionFlecha(44,22));
hulk.smash();
console.log(nombre, apodo, plataforma);


//PROMESAS
let prom1 = new Promise ( function (resolve, reject){
    setTimeout(()=>{
        console.log("Promesa terminada")
        //resolve();
        reject();
    }, 2000)
});

prom1.then(function (){
    console.log("Ejecutarme cuando se termine bien!");
}, function (){
    console.log("Ejecutar si todo sale mal");
})

//interfaces
interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen : Xmen){
    console.log("Enviando a:" + xmen.nombre);
}

let demoXmen:Xmen = {
    nombre: "XmenName",
    poder: "Regeneracion"
}

enviarMision(demoXmen);

//Introduccion a las clases POO

class Player {
    name:string = "Jugador";
    team:string;
    nick:string;
    isInjured:boolean;
    matches:number;

    constructor(name:string, team:string, nick:string){
        this.name = name;
        this.team = team;
        this.nick = nick;
    }
}

let gorkaeff:Player = new Player("Gorkilla","FCB","gorkaeffNick");
console.log(gorkaeff);