function trocaImagem () {
   document.getElementById("myImage").src="img/html-logo-badge-512.png";
}
 
function imagemTroca () {
   document.getElementById("myImage").src="img/js-logo-badge-512.png";
}
  
function trocaFonte () {
   document.getElementById("demo").style.fontSize="35px";
} 

function fonteTroca () {
   document.getElementById("demo").style.fontSize="16px";
}

function ocultarElemento () {
	document.getElementById("demo").style.display="none";

}

function elementoOculto () {
	document.getElementById("demo").style.display="block";
}

function calcular () {
	document.getElementById("demo").innerHTML = 5 + 5;
}