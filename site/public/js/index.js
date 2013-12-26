$(document).ready(function() {
	var fondos = Array("img/fondo-inicio1.jpg", "img/fondo-inicio2.jpg", "img/fondo-inicio3.jpg");
	CambiarFondos(fondos, 5);
	
	var medida = $(document).height()-134;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 749));
	$("#bg-motivo").css("width", ((medida * 1468) / 749));
	
	$("#paginacion-noticias a").click(function(e) {
		e.preventDefault();
		if ($(this).attr("href") == "izq") {
			$("div#noticias_block").animate({
				scrollTop : $("div#noticias_block").scrollTop() - 146
			});
		} else if ($(this).attr("href") == "der") {
			$("div#noticias_block").animate({
				scrollTop : $("div#noticias_block").scrollTop() + 146
			});
		} else {
			$("#paginacion-noticias a img.boton").attr("alt", "bola-gris");
			$("#paginacion-noticias a img.boton").attr("src", "img/bola-gris.png");
			$(this).find("img.boton").attr("alt", "bola-azul");
			$(this).find("img.boton").attr("src", "img/bola-azul.png");
			$("div#noticias_block").animate({
				scrollTop : $(this).attr("href")
			});
		}

	})
	$("#barra-verde a").click(function(e) {
		e.preventDefault();
		$("#barra-verde a").removeClass("seleccionado");
		$(this).addClass("seleccionado");
		$("div#noticias_block").scrollTop(0);
		if ($(this).attr("href") == "noticias") {
			$("div#noticias_block").animate({
				scrollLeft : 0
			});
		} else {
			$("div#noticias_block").animate({
				scrollLeft : 501
			});
		}
	})
	$("#input-flotador-label label").click(function() {
		var input = $("#input-flotador-input input").val();
		input.toLowerCase();
		input.replace(" ", "-");
		input.replace("á", "a");
		input.replace("é", "e");
		input.replace("í", "i");
		input.replace("ó", "o");
		input.replace("ú", "u");

		window.location.href = "buscar-" + input;
	})
})