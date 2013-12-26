$(document).ready(function() {
	CambiarFondos(Array("img/fondo-inicio1.jpg", "img/fondo-inicio2.jpg", "img/fondo-inicio3.jpg"), 5);

	var medida = $(document).height()-134;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 842));
	$("#bg-motivo").css("width", ((medida * 1468) / 842));
	
})
/*
$(window).load(function(){
	$("#bgchange2").css("height", $("section").height());
	$("#bg-motivo").css("height", $("section").height());
	$("#bgchange2").css("width", ($("section").height() * 1468) / 709);
	$("#bgchange2").css("margin-left", ((($("section").height() * 1468) / 709)/2)*-1);
})
**/