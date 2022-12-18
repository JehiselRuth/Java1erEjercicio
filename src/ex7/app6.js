/*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a*/

/*Conectar html con js del ejercicio 7
Crear mensaje que diga "escribe una frase"
Crear funciones js para obtener/almacenar la frase
encontrar la letra a en la frase
imprimir resultado en el navegador.*/

let Text = prompt("Escribe una frase");
let nText = Text.length;
let i;
let Empty = "0"

for (i = 0; i < nText; i++) {
if (Text.substr(i,1) === "a" ) {
document.write(Text.substr(i,1))
}  else {document.write((Empty));
    
}

 }
