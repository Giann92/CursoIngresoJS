/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var total;
     largo = txtIdLargo.value;
     ancho = txtIdAncho.value;
      largo = parseFloat(largo);
      ancho = parseFloat(ancho);
     
      perimetro = 2*largo + 2*ancho;

      total = 3 *  perimetro;

       alert("Se necesita comprar : " + total +" metros de alambre");

}
function Circulo () 
{
    var radio;
    var pi = Math.PI;
    var circun;
    var totalRad;

    radio  = txtIdRadio.value;

    radio = parseFloat(radio);

    circun = 2 * pi * radio;
    
    totalRad = 3 * circun;

    alert("Se necesita comprar : " + totalRad +" metros de alambre")
}
function Materiales () 
{   var largo;
    var ancho;
    var area;
    var cemento = 2;
    var cal = 3;
    var bolsaCemento;
    var bolaCal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
     
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;
    bolsaCemento = area * cemento;
    bolaCal = area * cal;

    alert("Necesitas : " + bolsaCemento + " bolsa de cemento" + " y " + bolaCal + " bolsa de cal");

}
