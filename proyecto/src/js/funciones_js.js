function fnClRegistrar() {
	document.getElementById("tituloModal").innerHTML = "Registrar";
	fnLimpiarInputs();
}

function fnLimpiarInputs() {
	document.getElementById("nombres").value = "";
	document.getElementById("apellidos").value = "";
	document.getElementById("edad").value = "";
	document.getElementById("telefono").value = "";
}

function llenarGrados() {
	let xmlhttp = new XMLHttpRequest();
	var grados = document.getElementById("grados");
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		    var jsonResponse = xmlhttp.responseText;
		    var objeto_json = JSON.parse(jsonResponse);
		 
		    for (var i=0; i < objeto_json.length; i++) {
		    	var aTag = document.createElement('option');
			    aTag.setAttribute('value', objeto_json[i].nombre);
			    aTag.innerHTML = objeto_json[i].nombre;

				grados.appendChild(aTag);
		    }	    
		}
	}

	xmlhttp.open("GET","grados.json");
	xmlhttp.send();
}