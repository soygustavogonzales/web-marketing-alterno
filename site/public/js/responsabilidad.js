$(document).ready(function() {
	console.log($(document).height() - 134);
	CambiarFondos(Array("img/fondo-responsabilidad1.jpg", "img/fondo-reubicacion2.jpg"), 5);

	/*$("#bgchange2").css("height", 959);
	 $("#bg-motivo").css("height", 959);
	 $("#bgchange2").css("width", 1631);
	 $("#bgchange2").css("margin-left", "-815px");*/

	var medida = 1187;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 863));
	$("#bg-motivo").css("width", ((medida * 1468) / 863));

	$('.accordionButton').click(function() {

		$('.accordionButton').removeClass('on');

		$('.accordionContent').slideUp('normal');

		if ($(this).next().is(':hidden') == true) {

			$(this).addClass('on');

			$(this).next().slideDown('normal');
		}

	});

	$('.accordionButton').mouseover(function() {
		$(this).addClass('over');

	}).mouseout(function() {
		$(this).removeClass('over');
	});

	$('.accordionContent').hide();

})