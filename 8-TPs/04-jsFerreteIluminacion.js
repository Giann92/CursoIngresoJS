/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadDeLamparas;
    var precioLamparas = 35;
    var descuento1;
    var descuento2;
    var descuento3;
    var precioFinal;
    var importelamptotal;
    var marcaLapampara = document.getElementById("Marca");
    

    marcaLapampara = marcaLapampara.value;
    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    importelamptotal = parseInt(importelamptotal);
    precioFinal = parseInt(precioFinal);
 
    descuento1 =  0.50;
    descuento2 =  0.40;
    descuento3 =  0.30;

    importelamptotal = cantidadDeLamparas * precioLamparas;
     
    alert(importelamptotal);

    if(cantidadDeLamparas > 5)
    {
        precioFinal = importelamptotal - (importelamptotal * descuento1);
        txtIdprecioDescuento.value = precioFinal;
    }
    else
    {
        if(cantidadDeLamparas == 5 )
        {
            if(marcaLapampara == "ArgentinaLuz")
            {
             precioFinal = importelamptotal - (importelamptotal * descuento2);
             txtIdprecioDescuento.value = precioFinal;
            }
            else
            {
             precioFinal = importelamptotal - (importelamptotal * descuento3);
             txtIdprecioDescuento.value = precioFinal;
            }
        }
    }

    
 	
}
