function saludar(personName) {
    console.log("Welcome " + personName.toUpperCase());
}
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "Antivirus"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 el " + objeto + " " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 el " + objeto;
    }
    console.log(mensaje);
}
activar("Gorka", "sensor", "lentamente");
var alias = "gorkaeff";
var NOMODIFICADA = "noSePuedeModificar";
if (true) {
    var alias_1 = "gorkaeff_scope2";
}
var soyString = "Soy String";
var numero = 123;
var booleano = true;
var hoy = new Date();
var cualquiera;
var person = {
    name: "Gorka",
    surname: "Jusue",
    age: 31
};
var templatePrueba = "Hola, " + person.name + " " + person.surname + ", tienes " + person.age + ".";
var templatePruebaTabulada = "Hola, \n" + person.name + " " + person.surname + ", \ntienes " + person.age + ".";
saludar(person.name + " " + person.surname);
console.log(alias);
console.log(templatePrueba);
console.log(templatePruebaTabulada);
//Funciones flecha
var testFuncion = function (sum1, sum2) {
    var suma = sum1 + sum2;
    var fivePercent = suma * 0.05;
    return suma + fivePercent;
};
var testFuncionFlecha = function (sum1, sum2) {
    var suma = sum1 + sum2;
    var fivePercent = suma * 0.05;
    return suma + fivePercent;
};
var hulk = {
    nombre: "Increible Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smashhhhh!!!"); }, 2000);
    }
};
var destructuracionDeObjetos = {
    nombre: "Gorka",
    apodo: "Gorkaeff",
    plataforma: "Github"
};
var nombre = destructuracionDeObjetos.nombre, plataforma = destructuracionDeObjetos.plataforma, apodo = destructuracionDeObjetos.apodo;
var myArrayDestructurado = ["Pepon", "Turon", "Marlon"];
var referencia3 = myArrayDestructurado[2];
console.log(referencia3);
console.log(testFuncion(40, 60));
console.log(testFuncionFlecha(44, 22));
hulk.smash();
console.log(nombre, apodo, plataforma);
//PROMESAS
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //resolve();
        reject();
    }, 2000);
});
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.log("Ejecutar si todo sale mal");
});
