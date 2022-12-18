/*Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.*/

/*Conectar html con js del ejercicio 9
Crear mensaje que pida una frase 
Objeter frase en js
Diferenciar y obtener vocales de la frase
contar vocales
imprimir resultado de cuántas vocales tiene la frase en el navegador.*/

const contarVocales = palabra => {
    
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};

const cadena = prompt("Escribe una frase");
const vocales = contarVocales(cadena);

document.write(vocales);