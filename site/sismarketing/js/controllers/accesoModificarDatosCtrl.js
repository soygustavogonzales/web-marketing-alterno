sismarketingApp.controller('accesoModificarDatosCtrl',['$scope','$location','serviceProfile',function($scope,$location,serviceProfile){

	$scope.submitForm = function(){
		console.log("formulario valido? "+$scope.submitForm_.$valid);
		if($scope.submitForm_.$valid){
				var obj = {
					nombres:$scope.nombres,
					apellidoP:$scope.apellidoP,
					apellidoM:$scope.apellidoM,
					celular:$scope.celular,
					telefono:$scope.telefono,
					estadoCivil:$('#formUpdate .estadoCivil').val(),
					dni:$scope.dni,
					correo:$scope.correo,
					domicilio:$scope.domicilio,
					referenciaDomicilio:$scope.referenciaDomicilio
				}
				console.log(obj);
					$.post($scope.actualizarDatosPersonales
					,obj
					,function(data){
							console.log(data);
						if(data=="false"){
							alert("Un error al guardar los datos")
						}else{
							alert("Se actualizo correctamente")
						}
					});
		}
	}//submitForm

	serviceProfile.getUserProfile(function(user){

		var userProfile = ((Object.prototype.toString.call(user)=="[object Object]")?user:JSON.parse(user));
		$scope.userJob = userProfile.tipoUsuario;
		$scope.userName = userProfile.nombreUsuario;
		$scope.userPicture = userProfile.fotoUsuario||null;
		$scope.userAccess = userProfile.accesos;
		$scope.modificarDatosAccess = $scope.userAccess.modificarDatos;
		$scope.dni = $scope.modificarDatosAccess.contenido.formulario.dni.value;
		//$scope.formulario = $scope.modificarDatosAccess.contenido.formulario;
		$scope.actualizarDatosPersonales = $scope.modificarDatosAccess.URI.uri;
		$scope.nombres = $scope.modificarDatosAccess.contenido.formulario.nombres.value;
		$scope.apellidoP = $scope.modificarDatosAccess.contenido.formulario.apellidoP.value;
		$scope.apellidoM = $scope.modificarDatosAccess.contenido.formulario.apellidoM.value;
		$scope.celular = $scope.modificarDatosAccess.contenido.formulario.celular.value;
		$scope.telefono = $scope.modificarDatosAccess.contenido.formulario.telefono.value;
		$scope.estadoCivil = $scope.modificarDatosAccess.contenido.formulario.estadoCivil.value;
		$scope.correo = $scope.modificarDatosAccess.contenido.formulario.correo.value;
		$scope.domicilio = $scope.modificarDatosAccess.contenido.formulario.domicilio.value;
		$scope.referenciaDomicilio = $scope.modificarDatosAccess.contenido.formulario.referenciaDomicilio.value;
		$scope.$apply();
	})

}]);