$(document).ready(function() {
	CambiarFondos(Array("img/fondo-proyecto2.jpg"), 5);

	var medida = $(document).height()-134;
	$("#bgchange2").css("height", medida);
	$("#bg-motivo").css("height", medida);
	$("#bgchange2").css("width", ((medida * 1468) / 842));
	$("#bg-motivo").css("width", ((medida * 1468) / 842));

	$("#btn_buscar").click(function(e) {
		e.preventDefault();

		var nombres = $("#nombres");
		var tipdoc = $("#tipdoc");
		var doc = $("#doc");
		var enviar = true;

		$("input[type='text']").css("border", "none");

		$("input[type='text']").each(function() {
			if ($(this).val() == "") {
				$(this).css("border", "1px solid #ff0000");
				enviar = false;
			}
		})
		if ($("#tipdoc").val() == "") {
			$("#tipdoc").css("border", "1px solid #ff0000");
			enviar = false;
		}
		if (enviar) {
			$("#contacto-consulta").submit();
		}
	})

	$("#contacto-nuevo").validate({
		rules : {
			tipo : "required",
			nombres : "required",
			tipodoc : "required",
			documento : {
				required : true,
				digits : true
			},
			telefono : {
				required : true,
				digits : true
			},
			email : {
				required : true,
				email : true
			},
			direccion : "required",
			distrito : "required",
			tema : "required",
			categoria : "required",
			mensaje : "required",
			captcha : "required"
		},
		messages:{
			telefono : {
				required : "Este campo es obligatorio",
				digits : "Coloque números"
			}
		}
	})
})