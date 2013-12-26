$(document).ready(function() {
	$("#centro").width($(window).width() - 200);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 200);
	});

	$(".cajas").click(function() {

		var rel = $("#texto div.seleccionado").attr("rel");

		$("#descripciones").find("div[rel='" + rel + "']").hide();

		$(".cajas").removeClass("seleccionado");
		$(this).addClass("seleccionado");

		$("#descripciones").find("div[rel='" + $(this).attr("rel") + "']").show();

		var id_fondo = $(this).attr("rel");

		$("div#der").css("background-image", 'url("images/servicios/fondos/' + id_fondo + '.jpg")');

	});
});