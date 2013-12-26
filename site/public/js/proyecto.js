$(document).ready(function() {
	CambiarFondos(Array("img/fondo-proyecto1.jpg", "img/fondo-proyecto2.jpg", "img/fondo-proyecto3.jpg"), 5);

	var medida = $(document).height()-134;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 842)););
	$("#bg-motivo").css("width", ((medida * 1468) / 842));

	$(".video_img").click(function() {
		var id = $(this).attr("rel");
		$("#yt_video").attr("src", "http://www.youtube.com/embed/" + id);
		$("#lightbox").animate({
			opacity : 'show'
		}, 1000, function() {
			$("#yt_video").show();
		})
	})

	$("#lightbox_cerrar").click(function() {
		$("#yt_video").hide();
		$("#lightbox").animate({
			opacity : 'hide'
		})
	})
	
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
	
	$(".wrapper div:first-child").click();
})