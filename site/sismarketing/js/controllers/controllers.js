sismarketingApp.controller('profileCtrl',['$scope','$location',function($scope,$location){
		var lateralContent = $('.lat-content');
		lateralContent.status = true;//visible 
			var routerP = $location.protocol()
																	+"://"+$location.host()
																	+":"+$location.port();	

		$scope.validationStyle = function(input,istrue,isfalse){
			//console.log($scope);
			//console.log($scope);

			//return ((input.$invalid)?isfalse:istrue);
		}

	$scope.mover = function(e){
		lateralContent.distMover = ($('.wrap-l').width()-60);
		console.log(lateralContent.distMover);
		$('.lat-content').animate({
			"left":((lateralContent.status)?"-":"+")+"="+lateralContent.distMover+"px"
		},500,function(){
			console.log('lateralContent movida');
			$('.cuerpo').css({
				"margin-left":((lateralContent.status)?"-6.5%":"1.5%"),
				//"top":((lateralContent.status)?"80px":"80px"),
				"width":((lateralContent.status)?"+="+(lateralContent.distMover-20)+"px":"-="+(lateralContent.distMover-20)+"px")
			})
			$('.p-titulo, .p-footer').css({
				"text-align":((lateralContent.status)?"right":"left")
			},1000)
			$('.elem').animate({
				"margin-left":((lateralContent.status)?"60px":"30px")
			}, 400);
			$('.lat-footer').animate({
				"left":((lateralContent.status)?"-":"+")+"="+lateralContent.distMover+"px"
			},800);
			/*
			*/
				$('.foto').animate({
					"top":((lateralContent.status)?"-=5px":"+=5px")
				},{
					duration:800,
					easing:"linear"
				})
			if(lateralContent.status)//visible
				lateralContent.status = false;//oculto
			else
				lateralContent.status = true;
		});	
	}

	$scope.getActive = function(id){
		return ((id == '0')?"active":"")
	}

	$('#accesos a').on('click',function(e){
		e.preventDefault();
		$(this).tab('show');
	})

	var getUserProfile = function(callback){
		$.get('/sismarketing/profile/getjson',function(data){
			return callback(data)
		})
	}

	$scope.logOut = function(){
			var jqxhr = $.ajax({
				url:'/sismarketing/logout',
				type:'post'
			});
			jqxhr.done(function(data){
				console.log('cerrando sesion: ' + data);//esto no se vera en consola-pero por si a caso ocurre algun fallo en la ejecucion de la sgte. linea-
				if(data == 'true')
					location.replace(routerP+'/sismarketing/login');
			});
			jqxhr.fail(function(jqXHR,textStatus){
				console.log('Error: ')
				console.log(jqXHR)
			})
		}
/*
	}
	$scope.getValue = function(idElemento){
		Verificara si existe algun valor en el localStorage de ese elemento
		var usrp = localStorage.getItem('userProfile')?JSON.parse(localStorage.getItem('userProfile')):null;
		console.log(usrp||null);

		return null
		//(usrp.data!=null)?usrp.data[idElemento]:null;
	}
*/

	$scope.submitForm = function(idAcceso){
		console.log(idAcceso)
		//var nroElemt = $scope.userAccess[idAcceso].contenido.formulario.length; //cantidad de elementos del formulario
		var elemts = $scope.userAccess[idAcceso].contenido.formulario; //cantidad de elementos del formulario
		var getObject = function(elem,idA){
			var o = new Object();
			angular.forEach(elem,
				function(value,key){
					if(value.nodo == 'input' || value.nodo == 'select' || value.nodo == 'textarea')
						o[value.id] = $('.'+idA+''+key).val();
				}
			)//angular.forEach
			return o;
		}//submitForm

		//console.log(getObject(elemts,idAcceso))
		//console.log(obj)
		var sendData = function(metodo,data,router){
			/*
			*metodo :'string' => 'get/post'
			*data:'strong' or Object(JSON) => {foo:'bar'}
			*router :'string' => 'sismarketing/../../etc'
			*/		
			var userProfile = new Object();
			userProfile.data = data;
			localStorage.setItem('userProfile',JSON.stringify(userProfile));
			var jqxhr = $.ajax({
				url:router,
				type:metodo,
				data:obj
			});
			jqxhr.done(function(data){
				console.log('llego rpta: ')
				console.log(data)
			});
			jqxhr.always(function(datajqXHR,textStatus){

			});
			jqxhr.fail(function(jqXHR,textStatus){
				console.log('Error: ')
				console.log(jqXHR)
			})
		}

		switch(true){
			case (idAcceso == '0'):
				obj = getObject(elemts,idAcceso)
				sendData(
					'post',
					obj,
					'/sismarketing/actualizar/postulante'
				)
			break;
			case (idAcceso == '2'):
				obj = getObject(elemts,idAcceso)
				sendData(
					'post',
					obj,
					'/sismarketing/crear/puesto')
				break;
		}

	}//submitForm

	var userProfile = null;

	getUserProfile(function(user){
		userProfile = ((Object.prototype.toString.call(user)=="[object Object]")?user:JSON.parse(user));
		$scope.userJob = userProfile.tipoUsuario;
		$scope.userPicture = userProfile.accesos[0].contenido.formulario[10].rutafoto||null;
		$scope.userAccess = userProfile.accesos;
		$scope.$apply();
	})

}]);