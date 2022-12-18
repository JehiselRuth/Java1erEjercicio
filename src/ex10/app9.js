/*Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales*/

/*Conectar html con js del ejercicio 10
Crear mensaje que pida una frase 
Objeter frase en js
Obtener vocales de la frase
Contar vocales
imprimir resultado en el navegador.*/

let palabraIntroducida = prompt("Introduzca una palabra o texto");
let aCont= 0; 
let eCont= 0;
let iCont= 0;
let oCont= 0;
let uCont= 0;
let otrosCont = 0;

for (let i = 0 ; i < palabraIntroducida.length ; i++) {

	switch(palabraIntroducida.charAt(i)) {

		case "a":
		aCont++;
		break;

		case "e":
		eCont++;
		break;

		case "i":
		iCont++;
		break;

		case "o":
		oCont++;
		break;

		case "u":
		uCont++;
		break;

		default:
		otrosCont++;
		break;

	}

}

document.write("Totales: <br>" + "A: " + aCont + "<br>E: " + eCont + "<br>I: " + iCont + "<br>O: " + oCont + "<br>U: " + 
uCont + "<br>Otras letras, numeros o caracteres: " + otrosCont);


