/*Escribe un programa que pida una frase y escriba las vocales que aparecen*/

/*Conectar html con js del ejercicio 7
Crear mensaje que pida una frase 
Objeter frase en js
Diferenciar y obtener vocales de la frase
imprimir resultado en el navegador.*/

let Text = prompt("Escribe una frase");
let nText = Text.length;
let i;

for (i = 0; i < nText; i++) {
if (Text.substr(i,1) === "a" || Text.substr(i,1) === "e" || Text.substr(i,1) === "i" || Text.substr(i,1) === "o" || Text.substr(i,1) === "u") {
document.write(Text.substr(i,1));
}
}





