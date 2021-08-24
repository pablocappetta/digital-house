//Importo modulos
let dividir = require("./dividir");
let multiplicar = require("./multiplicar");
let restar = require("./restar");
let sumar = require("./sumar");
const prompt = require("prompt-sync")();

/*El equivalente a printf (Python) en JavaScript es Template Strings y están usados debajo*/

//Suma
var valorUno = prompt("Primer número a sumar: ");
var valorDos = prompt("Segundo número a sumar: ");

var resultado = sumar(Number(valorUno), Number(valorDos));

console.log(
  `El resultado de la suma de ${valorUno} y ${valorDos} es ${resultado}`
);

//Resta
var valorUno = prompt("Primer número a restar: ");
var valorDos = prompt("Segundo número a restar: ");

var resultado = restar(Number(valorUno), Number(valorDos));

console.log(
  `El resultado de la resta de ${valorUno} y ${valorDos} es ${resultado}`
);

//Multiplicación
var valorUno = prompt("Primer número a multiplicar: ");
var valorDos = prompt("Segundo número a multiplicar: ");

var resultado = multiplicar(Number(valorUno), Number(valorDos));

console.log(
  `El resultado de la multiplicación de ${valorUno} y ${valorDos} es ${resultado}`
);

//Dividir
var valorUno = prompt("Primer número a dividir: ");
var valorDos = prompt("Segundo número a dividir: ");

var resultado = dividir(Number(valorUno), Number(valorDos));

if (isNaN(resultado) == true) {
  console.log(resultado);
} else {
  console.log(
    `El resultado de la división de ${valorUno} y ${valorDos} es ${resultado}`
  );
}
