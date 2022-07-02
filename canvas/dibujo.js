var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick );

function dibujoPorClick()
{
 var lineas = parseInt(texto.value);
var l =  0;
var yi, xf;
var espacio = ancho / lineas;

//manera de hacer cciclos con for
//while(l < lineas)
for (l = 0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 300);
    console.log("Linea " + 1);
    l = l + 2;
}

dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);
}


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

//javascript para leer el codigo leer primero las funciones y despues todo el codigo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}