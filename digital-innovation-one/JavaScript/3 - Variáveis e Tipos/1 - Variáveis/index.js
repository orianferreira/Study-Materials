//var e let

/* 
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; //this scope is global
  let b = 22; //this scope is inside the if-block

  console.log(a); //11
  console.log(b); //22
}

console.log(a); //11
console.log(b); //2
 */

//exemplos

/* 
numberOne = 1;

console.log(numberOne + 2);

var numberOne; // vai subir essa variável para cima
 */

/* 
var firstName = "João";
let lastName = "Souza"; //este let é uma variável global porque fora de um bloco

if (firstName === "João") {
  let lastName = "Rodrigues"; //este let é local, esta dentro de um bloco
  var firstName = "Pedro";
  lastName = "Silva";

  console.log(lastName)
}

console.log(firstName, lastName)
 */