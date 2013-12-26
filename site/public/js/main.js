function CambiarFondos(fondos, tiempo) {
	$("*").css("z-index");
	//var fondos = Array("img/fondo2.jpg", "img/fondo2-2.jpg", "img/fondo2-3.jpg");
	//var tiempo = 5;
	//segundos

	var d = new Date();
	var id = "bgchange";

	$("body").append("<div id='" + id + "'></div>");
	$("#bgchange").css("position", "absolute");
	$("#bgchange").css("right", 0);
	$("#bgchange").css("bottom", 0);
	$("#bgchange").css("width", 1);
	$("#bgchange").css("height", 1);
	$("#bgchange").css("overflow", 'hidden');

	var len = fondos.length;
	for (var i = 0; i < len; i++) {
		$("#bgchange").append("<img src='" + fondos[i] + "'/>");
	}

	var id2 = "bgchange2";
	$("body").append("<div id='" + id2 + "'></div>");
	$("#bgchange2").css("position", "absolute");
	$("#bgchange2").css("z-index", -2);
	$("#bgchange2").css("top", 0);
	$("#bgchange2").css("left", "0");
	$("#bgchange2").css("margin-left", "0");
	//$("#bgchange2").css("width", $(document).width());
	//$("#bgchange2").css("height", $("section").height());
	$("#bgchange2").css("width", 0);
	$("#bgchange2").css("height", 0);
	$("#bgchange2").css("margin-top", 67);
	$("#bgchange2").css("background-size", "contain");
	$("#bgchange2").css("background-position", "top center");
	$("#bgchange2").css("overflow", "hidden");	
	$("#bgchange2").css("background-repeat", "no-repeat");
	$("#bgchange2").css("background-image", "url('" + fondos[0] + "')");

	var id3 = "bg-motivo";
	$("body").append("<div id='" + id3 + "'></div>");
	$("#bg-motivo").css("position", "absolute");
	$("#bg-motivo").css("z-index", -1);
	$("#bg-motivo").css("top", 0);
	$("#bg-motivo").css("left", 0);
	$("#bg-motivo").css("width", 0);
	$("#bg-motivo").css("height", 0);
	$("#bg-motivo").css("margin-top", 67);
	$("#bg-motivo").css("background", "url(img/fondo-motivo.png)");
	$("#bg-motivo").css("background-repeat-x", "repeat");
	$("#bg-motivo").css("background-repeat-y", "repeat");

	var van = 1;
	Rotar();

	function Rotar() {
		intervalo = window.setInterval(function() {
			if (van < len) {
				nuevaurl = fondos[van];
				van++;
			} else {
				nuevaurl = fondos[0];
				van = 1;
			}
			$("#info").animate({
				scrollLeft : (van - 1) * 501
			}, 500);
			$("#bgchange2").animate({
				opacity : 0
			}, 500, function() {
				$(this).css({
					'background-image' : "url('" + nuevaurl + "')"
				}).animate({
					opacity : 1
				});
			});
		}, tiempo * 1000);
	}


	$("#bg_nav a").click(function(e) {
		e.preventDefault();
		window.clearInterval(intervalo);

		nuevaurl = fondos[$(this).attr("rel")];

		$("#info").animate({
			scrollLeft : ($(this).attr("rel")) * 501
		}, 500);

		$("#bgchange2").animate({
			opacity : 0
		}, 500, function() {
			$(this).css({
				'background-image' : "url('" + nuevaurl + "')"
			}).animate({
				opacity : 1
			});
		});

		van = $(this).attr("rel");
		Rotar();

	})
}