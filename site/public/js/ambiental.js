$(document).ready(function() {
	CambiarFondos(Array("img/fondo-ambiental1.jpg", "img/fondo-reubicacion2.jpg"), 5);
	
	var medida = $(document).height()-134;
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