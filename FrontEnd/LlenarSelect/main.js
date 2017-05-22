var datos = ['Juan', 'Mario', 'Ana', 'Juana'];
var grados = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];

// Con JavaScript
var alumnos = document.getElementById("alumnos");

for(var i=0; i < datos.length; i++){
	var aTag = document.createElement('option');
    aTag.setAttribute('value', datos[i]);
    aTag.innerHTML = datos[i];

	alumnos.appendChild(aTag);
}

// Con Jquery
var selectGrados = $("#Grados");

$(grados).each(function(i, v){ // indice, valor
    selectGrados.append('<option value="' + v + '">' + v + '</option>');
});