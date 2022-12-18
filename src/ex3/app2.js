/*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

Conectar html con js del ejercicio 3
Crear input de texto 
Sobre el input de texto anterior, colocar un texto que diga "Escribe tu nombre de usuario"
Crear botón al lado del input que diga "enviar"
Crear funciones js para obtener el nombre que ingrese el usuario 
Crear mensaje que muestre el texto "Hola" 
Activar mensaje de respuesta al click del botón que diga "hola____(y aquí aparezca el nombre del usuario)"
*/


  function captura ()  {
    let nombreDeusuario = document.getElementById("userName").value;
    alert ("Hola " + nombreDeusuario);
  } 

