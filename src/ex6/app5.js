/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor 
de los tres.*/

/*Conectar html con js del ejercicio 6
Crear mensajes que pidan tres números 
Colocar un texto que diga "El número mayor es"
Crear funciones js para obtener los números
Calcular cuál es el mayor 
imprimir resultado en el navegador.*/

let firstNumber = prompt("Escribe un número");
let secondNumber = prompt("Escribe otro número");
let thirdNumber = prompt("Escribe un último número");

if  (firstNumber>secondNumber && firstNumber>thirdNumber)  {
    document.write(firstNumber);
     } else if (secondNumber>thirdNumber && secondNumber>firstNumber){
        document.write(secondNumber);
} else {
    document.write(thirdNumber);
     
    }




