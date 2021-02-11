/*Desumma Gian Franco*/

function mostrar()
{
  
	var edad;
    var estadoCivil = document.getElementById("estadoCivil");
  
  estadoCivil = estadoCivil.value;
  edad = txtIdEdad.value;
  edad = parseInt(edad);

  if(edad < 18 && estadoCivil != "Soltero" )
  {
   alert("Es muy pequeño para NO ser soltero");
  }
}