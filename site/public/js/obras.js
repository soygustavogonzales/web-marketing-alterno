$(document).ready(function() {
	CambiarFondos(Array("img/fondo-obras1.jpg"), 5);

	var medida = $(document).height() - 67;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 1256));
	$("#bg-motivo").css("width", ((medida * 1468) / 1256));

	if (medida == 1545) {
		$("#bgchange2").css("width", 1910);
		$("#bg-motivo").css("width", 1910);
		$("#bgchange2").css("background-size","cover");
		$("#bg-motivo").css("background-size","cover");
	}

	$("#obra_mapa").click(function() {
		$("#lightbox").animate({
			opacity : 'show'
		}, 1000)
	})
	$("#lightbox").click(function() {
		$("#lightbox").animate({
			opacity : 'hide'
		})
	})
	$('.enero p a').lightBox({
		fixedNavigation : true
	});
	$('.febrero p a').lightBox({
		fixedNavigation : true
	});
	$('.marzo p a').lightBox({
		fixedNavigation : true
	});
	$('.abril p a').lightBox({
		fixedNavigation : true
	});
	$('.mayo p a').lightBox({
		fixedNavigation : true
	});
	$('.junio p a').lightBox({
		fixedNavigation : true
	});
	$('.julio p a').lightBox({
		fixedNavigation : true
	});
	$('.agosto p a').lightBox({
		fixedNavigation : true
	});
	$('.setiembre p a').lightBox({
		fixedNavigation : true
	});
	$('.octubre p a').lightBox({
		fixedNavigation : true
	});
	$('.noviembre p a').lightBox({
		fixedNavigation : true
	});
	$('.diciembre p a').lightBox({
		fixedNavigation : true
	});
	$('.campamento p a').lightBox({
		fixedNavigation : true
	});

})