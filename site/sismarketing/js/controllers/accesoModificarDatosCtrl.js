sismarketingApp.controller('accesoModificarDatosCtrl',['$scope','$location','serviceProfile',function($scope,$location,serviceProfile){

	$scope.submitForm = function(){
		console.log("formulario valido? "+$scope.submitForm_.$valid);
		if($scope.submitForm_.$valid){
				var obj = {
					nombres:$scope.nombres,
					apellidoP:$scope.apellidoP,
					apellidoM:$scope.apellidoM,
					celular:$scope.celular,
					estadoCivil:$('#formUpdate .estadoCivil').val(),
					correo:$scope.correo,
					domicilio:$scope.domicilio,
					referenciaDomicilio:$scope.referenciaDomicilio
				}
				console.log(obj);
					$.post("/sismarketing/actualizar/empleado"
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
		//$scope.formulario = $scope.modificarDatosAccess.contenido.formulario;
		$scope.$apply();
	})

}]);