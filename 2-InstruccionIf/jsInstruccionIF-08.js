/*Desumma Gian Franco*/

function mostrar()
{
  
	var edad;
    var estadoCivil = document.getElementById("estadoCivil");
  
  estadoCivil = estadoCivil.value;
  edad = txtIdEdad.value;
  edad = parseInt(edad);

  	if(edad > 17 && estadoCivil == "Soltero")
  {
   	alert("Es soltero y no es menor");
  }
}