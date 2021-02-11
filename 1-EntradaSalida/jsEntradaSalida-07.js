/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var unNumero;
	var otroNumero;
	var suma;
   
	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	suma = unNumero + otroNumero;
	
	alert("La suma es : " + suma);	
}

function restar()
{
	var unNumero;
	var otroNumero;
	var resta;
	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	resta = unNumero - otroNumero;
	
	alert("La resta es : " + resta);	
}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	var multiplicacion;
	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	multiplicacion = unNumero * otroNumero;
	
	alert("La suma es : " + multiplicacion);
}

function dividir()
{
	var unNumero;
	var otroNumero;
	var divicion;
	
	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	divicion = unNumero / otroNumero;
	
	alert("La divicion es : " + divicion);
}

