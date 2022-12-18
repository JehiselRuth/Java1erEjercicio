/*Escribir un programa que nos diga si un número dado es primo 
(no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

/*Conectar html con js del ejercicio 15
Crear mensaje que pida un número
Objeter número en js
Método que nos diga si es primo o no
imprimir resultado en el navegador.*/

let n1 = prompt("Escribe un número");
let i;
let primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}
