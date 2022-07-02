var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l =  0;
var yi, xf;
//for(l = 0; l < lineas; l++)
//manera de hacer cciclos con for
while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 300);
    console.log("Linea " + 1);
    l = l + 2;
}

dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);
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