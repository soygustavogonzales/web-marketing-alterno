$(document).ready(function() {
	$("#centro").width($(window).width() - 220);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 200);
	})
})