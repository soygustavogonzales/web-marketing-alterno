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
	var modalFinalPostulacion = appMKTServices.modal("Perfil Recibido!!","Gracias por postular, nos comunicaremos contigo en máximo una semana");
	angular.element('#web').append(modalFinalPostulacion);
}]);