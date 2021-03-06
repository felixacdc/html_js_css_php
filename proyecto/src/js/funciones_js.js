var nombres = document.getElementById("nombres");
var errorNombres = document.getElementById("errorNombres");
var apellidos = document.getElementById("apellidos");
var errorApellidos = document.getElementById("errorApellidos");
var edad = document.getElementById("edad");
var errorEdad = document.getElementById("errorEdad");
var telefono = document.getElementById("telefono");
var errorTelefono = document.getElementById("errorTelefono");
var grados = document.getElementById("grados");
var tituloModal = document.getElementById("tituloModal");
var btnRegistrar = document.getElementById("btnRegistrar");
var btnGuardar = document.getElementById("btnGuardar");
var btnEditar = document.getElementById("btnEditar");
var expresionRegularTelefono = /^([0-9]+){8}$/;
var expresionRegularEdad = /^\d*$/;
var alertaSucces = document.getElementById("alertaSucces");
var alertaSuccesTXT = document.getElementById("alertaSuccesTXT");
var bodyTable = document.getElementById("bodyTAlumnos");

function fnOcultarAlerts() {
	var elementos = document.querySelectorAll('.alert');
	for(i = 0; i < elementos.length ; i++) {
		elementos[i].style.display = "none";
	}
}

function fnClRegistrar() {
	tituloModal.innerHTML = "Registrar";
	btnGuardar.style.display = 'inline-block';
	btnEditar.style.display = 'none';
	limpiarValidaciones();
	fnLimpiarInputs();
}

function fnLimpiarInputs() {
	nombres.value = "";
	apellidos.value = "";
	edad.value = "";
	telefono.value = "";
	grados.value = null;
}

function llenarGrados() {
	let xmlhttp = new XMLHttpRequest();

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

function limpiarValidaciones() {
	errorNombres.style.display = 'none';
	errorApellidos.style.display = 'none';
	errorEdad.style.display = 'none';
	errorTelefono.style.display = 'none';
	errorGrados.style.display = 'none';
	nombres.parentNode.parentNode.classList.remove('has-error');
	apellidos.parentNode.parentNode.classList.remove('has-error');
	edad.parentNode.parentNode.classList.remove('has-error');
	telefono.parentNode.parentNode.classList.remove('has-error');
	grados.parentNode.parentNode.classList.remove('has-error');
}

function fnClGuardar() {
	var validacion = true;
	var vacios = "Este campo es requerido.";

	limpiarValidaciones();

	if(nombres.value.trim() == "") {
		errorNombres.innerHTML = vacios;
		errorNombres.style.display = 'block';
		nombres.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	}

	if(apellidos.value.trim() == "") {
		errorApellidos.innerHTML = vacios;
		errorApellidos.style.display = 'block';
		apellidos.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	}

	if(edad.value.trim() == "") {
		errorEdad.innerHTML = vacios;
		errorEdad.style.display = 'block';
		edad.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	} else if(parseFloat(edad.value) <= 0) {
		errorEdad.innerHTML = "Edad incorrecta.";
		errorEdad.style.display = 'block';
		edad.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	}

	if(telefono.value.trim() == "") {
		errorTelefono.innerHTML = vacios;
		errorTelefono.style.display = 'block';
		telefono.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	} else if(!expresionRegularTelefono.test(telefono.value.trim())) {
		errorTelefono.innerHTML = "Telefono incorrecto.";
		errorTelefono.style.display = 'block';
		telefono.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	}

	if(grados.value == "") {
		errorGrados.innerHTML = vacios;
		errorGrados.style.display = 'block';
		grados.parentNode.parentNode.classList.add('has-error');
		validacion = false;
	}

	if(validacion)
		guardarForm();
}

function listarAlumnos() {
	var ajax_url = "BackEnd/Listar.php";
	var ajax_request = new XMLHttpRequest();

	ajax_request.onreadystatechange = function() {
		if (ajax_request.readyState == 4 && ajax_request.status == 200) {
		    var jsonResponse = ajax_request.responseText;
		    var objeto_json = JSON.parse(jsonResponse);

				for (var i=0; i < objeto_json.respuesta.length; i++) {
		    	var trTag = document.createElement('tr');
					var tdNomTag = document.createElement('td');
					var txtNom = document.createTextNode(objeto_json.respuesta[i].nombres);
					tdNomTag.appendChild(txtNom);
					trTag.appendChild(tdNomTag);
					var tdApTag = document.createElement('td');
					var txtAp = document.createTextNode(objeto_json.respuesta[i].apellidos);
					tdApTag.appendChild(txtAp);
					trTag.appendChild(tdApTag);
					var tdEdadTag = document.createElement('td');
					var txtEdad = document.createTextNode(objeto_json.respuesta[i].edad);
					tdEdadTag.appendChild(txtEdad);
					trTag.appendChild(tdEdadTag);
					var tdTelTag = document.createElement('td');
					var txtTel = document.createTextNode(objeto_json.respuesta[i].telefono);
					tdTelTag.appendChild(txtTel);
					trTag.appendChild(tdTelTag);
					var tdGraTag = document.createElement('td');
					var txtGra = document.createTextNode(objeto_json.respuesta[i].grado);
					tdGraTag.appendChild(txtGra);
					trTag.appendChild(tdGraTag);

					bodyTable.appendChild(trTag);
		    }
				console.log(objeto_json.respuesta.length);
				console.log(objeto_json);
		}
	}

	ajax_request.open("GET", ajax_url, true);
	ajax_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax_request.send();
}

function guardarForm() {
	var ajax_url = "BackEnd/Guardar.php";
	var params = "nombres=" + nombres.value + "&apellidos=" + apellidos.value + "&edad=" + edad.value + "&telefono=" + telefono.value + "&grados=" + grados.value;
	var ajax_request = new XMLHttpRequest();

	ajax_request.onreadystatechange = function() {
		if (ajax_request.readyState == 4 && ajax_request.status == 200) {
		    var jsonResponse = ajax_request.responseText;
		    var objeto_json = JSON.parse(jsonResponse);

		 	$('#modalAccion').modal('hide');

		 	if(objeto_json.status == true){
		 		alertaSucces.style.display = 'block';
		 		alertaSuccesTXT.innerHTML = objeto_json.respuesta;
		 	} else {
		 		alertaSucces.style.display = 'block';
		 		alertaSuccesTXT.innerHTML = "Ha ocurrido un error al guardar el registro.";
		 	}

		 	setTimeout(function(){ fnOcultarAlerts(); }, 4000);
		}
	}

	ajax_request.open("POST", ajax_url);
	ajax_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax_request.send(params);
}
