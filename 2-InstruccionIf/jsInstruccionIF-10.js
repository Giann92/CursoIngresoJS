/*Desumma Gian Franco*/
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
/*Test
numRandom = 9 Excelente
numRandom = 8 APROBO
numRandom = 4 APROBO
numRandom = 3 Vamos, la proxima se puede
*/
function mostrar()
{
	var numRandom;

	/*numRandom = Math.floor(Math.random()*10 +1);*/
	//Hardcodeo
	numRandom = 3;
    console.log(numRandom);
	
	if (numRandom > 8)
	{
		alert("Excelente");
	} 
	else
	{
		if(numRandom > 3 )
		{
			alert("Aprobo");
		}
		else 
		{
			alert("Vamos, la proxima se puede");
		}
  	} 
	
}