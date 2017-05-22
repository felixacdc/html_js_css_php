var datos = ['Juan', 'Mario', 'Ana', 'Juana'];

// Con JavaScript
var alumnos = document.getElementById("alumnos");

for(var i=0; i < datos.length; i++){
	var aTag = document.createElement('option');
    aTag.setAttribute('value', datos[i]);
    aTag.innerHTML = datos[i];

	alumnos.appendChild(aTag);
}

