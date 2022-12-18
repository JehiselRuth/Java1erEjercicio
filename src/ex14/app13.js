/*Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/


/*Conectar html con js del ejercicio 14
Crear mensaje que pida un número
Objeter número en js
Hallar los divisores en común de los números
imprimir resultados en el navegador.*/

let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let x;
let i;

if (n1 < n2) {
x = n1;
} else {
x = n2;
}
for (i=2; i < x / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}
