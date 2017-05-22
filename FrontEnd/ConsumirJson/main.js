function leerConJavaScript() {
	let xmlhttp = new XMLHttpRequest();
	let alumnos = document.getElementById("contentAlumnos");
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		    var jsonResponse = xmlhttp.responseText;
		    var objeto_json = JSON.parse(jsonResponse);
		 
		    for (var i=0; i < objeto_json.length; i++) {
		    	var tr = document.createElement('tr');
		    	var tdNombre = document.createElement('td');
		    	var tdEdad = document.createElement('td');
		    	var tdSexo = document.createElement('td');
			    tdNombre.innerHTML = objeto_json[i].nombre;
			    tdEdad.innerHTML = objeto_json[i].edad;
			    tdSexo.innerHTML = objeto_json[i].sexo;
			    tr.appendChild(tdNombre);
			    tr.appendChild(tdEdad);
			    tr.appendChild(tdSexo);
			    alumnos.appendChild(tr);
		    }	    
		}
	}

	xmlhttp.open("GET","alumnos.json");
	xmlhttp.send();
}

function leerConJquery() {
	$.getJSON("maestros.json", function(datos) {
        $.each(datos, function(index, valor) {
        	$("#contentMaestros tbody").append(`<tr><td>${valor['nombre']}</td><td>${valor['edad']}</td><td>${valor['profesion']}</td></tr>`);
        });
    });
}

function leerConVue() {
	new Vue({
		el: 'body',
		data: {
			datosCursos: null
		},
		ready: function() {
			this.$http.get('cursos.json').then(response => {

				this.datosCursos = response.body;

			}, response => {
				console.log(response);
			});
		}
	})
}

leerConJavaScript();
leerConJquery();
leerConVue();
