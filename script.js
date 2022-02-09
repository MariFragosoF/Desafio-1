
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Creación de variables
var btnEncriptarTexto = document.getElementById("btn-encriptar");
var btnCopiarTextoEncriptado = document.getElementById("btn-copy");
var btnDesencriptarTexto = document.getElementById("btn-desencriptar");
var textoIngresado = document.getElementById("input-texto");
var textoCopiado = document.getElementById("msg");

//Botón para encriptar el texto
btnEncriptarTexto.addEventListener("click", function (event) {
  event.preventDefault();
  var textoIngresado = document.getElementById("input-texto").value;
  textoMinusculas(textoIngresado);
  encriptarTexto(textoIngresado);
});

//Función que permite encriptar un texto
function encriptarTexto(textoIngresado) {
  var textoIngresado = document.getElementById("input-texto").value;
  var campoEncriptar = document.getElementById("msg");
  var textoCopiado = textoIngresado

    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "obes")
    .replace(/u/gi, "ufat");
  campoEncriptar.value = textoCopiado;
  return textoCopiado;
}

//Botón para copiar el texto encriptado
btnCopiarTextoEncriptado.addEventListener("click", function (event) {
  event.preventDefault();
  copiarMensajeEncriptado(textoCopiado);
});

//Función que permite copiar el mensaje que fue encriptado
function copiarMensajeEncriptado(){

  var copiarMensaje = document.getElementById("msg")

   if (copiarMensaje.value == "") {
       copiarMensaje.focus();
       
   }
   else {
       copiarMensaje.select();
       navigator.clipboard.writeText(copiarMensaje.value);
       copiarMensaje.focus();
       
   }
       

 }

//Boton para desencriptar el texto
btnDesencriptarTexto.addEventListener("click", function (event) {
  event.preventDefault();
  var textoCopiado = document.getElementById("input-texto").value;
  desencriptarTexto(textoCopiado);
});

const letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz ";

var form = document.getElementById("form");

function textoMinusculas(textoIngresado) {
  for (i = 0; i < textoIngresado.length; i++) {
    if (letrasMinusculas.indexOf(textoIngresado.charAt(i), 0) < 0) {
      form.reset();
      alert("Sólo puedes ingresar letras en minúsculas");
      break;
    }
  }
}


//Función que permite desencriptar el texto
function desencriptarTexto(textoCopiado) {
  var textoCopiado = document.getElementById("input-texto").value;
  var textoIngresado = textoCopiado

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/obes/gi, "o")
    .replace(/ufat/gi, "u");
  var campoTexto = document.getElementById("input-texto");
  campoTexto.value = textoIngresado;
  return textoIngresado;
}