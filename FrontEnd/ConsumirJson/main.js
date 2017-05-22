function leerConJquery() {
	$.getJSON("./maestros.json", function(datos) {
        $.each(datos, function(index, valor) {
        	$("#contentMaestros tbody").append(`<tr><td>${valor['nombre']}</td><td>${valor['edad']}</td><td>${valor['profesion']}</td></tr>`);
        });
    });
}

leerConJquery();