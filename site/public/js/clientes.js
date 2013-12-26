$(window).load(function() {
	$("#wrapper").width($(".pin:first").height() * 20);
	$("img.lazy").lazyload({
		container : $("#centro"),
		failure_limit : 20
	});
});
$(document).ready(function() {
	$("#centro").width($(window).width() - 220);
	$("#columns").height($(window).height() + 10);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 220);
		$("#columns").height($(window).height() + 10);
	});

	$(".pin a").each(function() {
		$(this).attr('rel', 'gallery').fancybox({
			padding : 0
		});
	});

	$("div#der").click(function() {
		var ancho = $(".pin:first").width();
		var scroll = $("#centro").scrollLeft();
		var nuevoscroll = scroll + ancho;
		if (scroll < $("#wrapper").width()) {
			$("#centro").animate({
				scrollLeft : nuevoscroll
			});
		}
	});
	$("div#izq").click(function() {
		var ancho = $(".pin:first").width();
		var scroll = $("#centro").scrollLeft();
		var nuevoscroll = scroll - ancho;
		if (scroll > 0) {
			$("#centro").animate({
				scrollLeft : nuevoscroll
			});
		}
	});
});
