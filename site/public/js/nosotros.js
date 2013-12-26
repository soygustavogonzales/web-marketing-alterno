$(document).ready(function() {
	$("#centro").width($(window).width() - 200);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 200);
	})
})