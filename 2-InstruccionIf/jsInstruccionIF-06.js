/*Desumma Gian Franco */

function mostrar()
{
 var edad;

 edad = txtIdEdad.value;
 edad = parseInt(edad);

 if (edad > 17)
 {
	 alert("Es mayor de edad");

 } else
   {
	if(edad > 12 && edad <18)
	{
	   alert("Es adolescente");
	}
   } 
   if(edad < 13)
   {
	   alert("Es un niño");
   }


}