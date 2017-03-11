function saludar(personName) {
    console.log("Welcome " + personName.toUpperCase());
}
var alias = "gorkaeff";
if (true) {
    var alias_1 = "gorkaeff_scope2";
}
var person = {
    name: "Gorka",
    surname: "Jusue"
};
saludar(person.name + " " + person.surname);
console.log(alias);
