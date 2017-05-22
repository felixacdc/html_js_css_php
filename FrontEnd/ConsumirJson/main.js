function leerConJquery() {
	$.getJSON("./maestros.json", function(datos) {
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

leerConJquery();
leerConVue();