//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

/*Conectar html con js del ejercicio 4
Crear mensajes que pidan dos numeros 
Crear funciones js para obtener los números que ingrese el usuario 
sumar numeros
Crear mensaje que muestre el texto "La suma es" 
imprimir resultado y texto en el navegador.
*/

let numberOne = prompt("Escribe un número");
let numberTwo = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(numberOne)+ parseInt(numberTwo) ) );