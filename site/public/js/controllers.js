appMKT.controller('postulanteCtrl',['$scope','$http','globals','appMKTServices',function($scope,$http,globals,appMKTServices){

	var formPersona = globals.formPersona;
	$scope.sexo = formPersona.sexo;
	$scope.estado_civil = formPersona.estado_civil;
	$scope.nacionalidad = formPersona.nacionalidad;
	$scope.grado_estudio = formPersona.grado_estudio;
	$scope.estado_estudio = formPersona.estado_estudio;
	appMKTServices.activarDatePicker();		
	appMKTServices.obtenerPuestos('01'
		,function(puestos){
			console.log(puestos);
			$scope.puestos = puestos;
			
		});
	var modalFinalPostulacion = appMKTServices.modal(
										"avisoPos"//id del elemento modal, servira para identificarlo
										,"Perfil Recibido!!"//titulo del modal
										,"Cargando ..."//cuerpo(msj) del modal
		);
	angular.element('#web').append(modalFinalPostulacion);

	$('#datosPostulante').validationEngine('attach',{
			onValidationComplete : function(form,status){
				if(status){//true paso validacion interna
					validarDni($("#datosPostulante .dni").val(),function(rpta){
						console.log(rpta);
						if(rpta=="true"){
							enviar();//datos json
							enviarFiles();//enviar cv + foto
						}else{
							console.log("dni ya existe");
							$('#avisoPos').find('.modal-body').text("El dni ya existe");
							$('#avisoPos').modal('show')
						}
					})
				}
			}	
		});

	var validarDni = function(dni,callback){
		var dni = $("#datosPostulante .dni").val();
		var jhxhr = $.post('/sismarketing/index.min.php/seleccioncontrol/postulantecontrol/validarPostulanteDNI',
			{dni:dni},function(data){
				callback(data);
			});
	}
	var enviarFiles = function(){
   $(".foto").upload('/sismarketing/index.min.php/seleccioncontrol/postulantecontrol/guardarArchivos'
   ,function(respuesta) {
       //Subida finalizada.
   		console.log(respuesta);
       if (respuesta) {
           console.log('foto subida con exito.');
       } else {
           console.log('Error al subir la foto');
       }
   });
   $('.cv').upload('/sismarketing/index.min.php/seleccioncontrol/postulantecontrol/guardarArchivos'
   	,function(respuesta){
   		console.log(respuesta);
   		if(respuesta){
   			console.log("cv subido con exito");
   		} else{
   			console.log(" error al subir el cv")
   		}
   	});
	}
	var enviar = function(){
		var obtenerNombre = function(file){
			//file : elemento del dom seteado como elemento jQuery : $()
				var ruta = file.val();
				var nombre_ruta = ruta.substring(ruta.lastIndexOf("\\")+1);
				return nombre_ruta;
		}
		var objPos = {
			nombres : $("#datosPostulante .nombres").val(), 
			apellido_m : $("#datosPostulante .ap_materno").val(),
			apellido_p : $("#datosPostulante .ap_paterno").val(),
			sexo : $("#datosPostulante .sexo").val(),
			dni : $("#datosPostulante .dni").val(),
			estado_civil : $("#datosPostulante .estado_civil").val(),
			grado_estudio : $("#datosPostulante .grado_estudio").val(),
			estado_estudio : $("#datosPostulante .estado_estudio").val(),
			nacionalidad : $("#datosPostulante .nacionalidad").val(),
			institucion : $("#datosPostulante .institucion").val(),
			especialidad : $("#datosPostulante .especialidad").val(),
			fecha_nac : $("#datosPostulante .fecha_nac").val(),
			email : $("#datosPostulante .email").val(),
			telefono : $("#datosPostulante .telefono").val(),
			celular : $("#datosPostulante .celular").val(),
			domicilio : $("#datosPostulante .domicilio").val(),
			referencia_doc : $("#datosPostulante .referencia_doc").val(),
			talla : $("#datosPostulante .talla").val(),
			peso : $("#datosPostulante .peso").val(),
			puesto : $scope.puesto.puesto_id,
			cv : obtenerNombre($("#datosPostulante .cv")),
			foto : obtenerNombre($("#datosPostulante .foto"))
		}
			console.log(objPos)
			$.post('/sismarketing/index.min.php/seleccioncontrol/postulantecontrol/guardarpostulante'
				,objPos
				,function(data){
					if(data=="true"){
						console.log("Datos subidos con exito: " + data);
						$('#avisoPos').find('.modal-body').text("Gracias por postular, nos pondremos en contacto en breve");
						$('#avisoPos').modal('show')
					}
				}
			)
	}

}]);