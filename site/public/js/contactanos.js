$(document).ready(function() {
	$("#centro").width($(window).width() - 200);
	$("#der").width($("#centro").width() - 316);

	$(window).resize(function() {
		$("#centro").width($(window).width() - 200);
		$("#der").width($("#centro").width() - 316);
	})

	$("button").click(function(e) {
		e.preventDefault();
		var enviar = true;
		$("input").css("border", "1px solid #FFFFFF");
		$("select").css("border", "1px solid #FFFFFF");
		$("input").each(function(i) {
			if ($(this).val() == "") {
				$(this).css("border", "1px solid #ff0000");
				enviar = false;
			}
		})
		if ($("textarea").val() == "") {
			$("textarea").css("border", "1px solid #ff0000");
		}
		if (enviar) {

		}
return false;
	})
	var map;
	function initialize() {
		var mapOptions = {
			zoom : 16,
			center : new google.maps.LatLng(-12.08979, -77.06905),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('der'), mapOptions);

		var marker = new google.maps.Marker({
			position : new google.maps.LatLng(-12.08979, -77.06905),
			map : map,
			title : 'Marketing Alterno'
		});
	}


	google.maps.event.addDomListener(window, 'load', initialize);

})