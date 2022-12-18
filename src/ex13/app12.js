/*Escribir un programa que escriba en pantalla los divisores de un número dado*/

/*Conectar html con js del ejercicio 13
Crear mensaje que pida un número
Objeter número en js
Hallar los divisores del número
imprimir resultado en el navegador.*/

let numero1 = prompt("Escribe un número");
let i;

for (i=2;i < numero1/2; i++) {
if (numero1 % i === 0) {
document.write(i,", ");
}
}

