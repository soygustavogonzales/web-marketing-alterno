$(document).ready(function() {
	$("#centro").width($(window).width() - 220);
	$("#columns").height($(window).height() + 10);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 220);
		$("#columns").height($(window).height() + 10);
	})

	$(".pin a").each(function() {
		$(this).attr('rel', 'gallery').fancybox({
			padding : 0
		});
	})

})