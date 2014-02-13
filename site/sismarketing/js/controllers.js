sismarketingApp.controller('loginCtrl',['$scope','$http','$location',function($scope,$http,$location){
			console.log(
				$location.protocol()+"\n"+//http
				$location.host()+"\n"+//www.marketing-alterno.com
				$location.port()//80
			)
			var routerP = $location.protocol()
																	+"://"+$location.host()
																	+":"+$location.port();

		$scope.validationStyle = function(input,istrue,isfalse){
			return ((input.$invalid)?isfalse:istrue);
		}

		$scope.submitForm = function(){
			if($scope.loginForm.$valid)
				{
					var obj = {
						email:$scope.email,
						password:$scope.password
					}
					console.log(obj);

				$.post("/sismarketing/loginsend"
					,obj
					,function(data){
							console.log(data);
						if(data=="false"){
							alert("email or password incorrect")
						}else{
							console.log("Seras redireccionado...")
							location.assign(routerP+'/sismarketing/profile')
							//$location.url('/profile');
						}
					});

			}//if
		}
}]);

sismarketingApp.controller('profileCtrl',['$scope',function($scope){
		var lateralContent = $('.lat-content');
		lateralContent.status = true;//visible 
		
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

			$('.lat-footer').animate({
				"left":((lateralContent.status)?"-":"+")+"="+lateralContent.distMover+"px"
			},800);
			/*
			*/
				$('.foto').animate({
					"top":((lateralContent.status)?"-=10px":"+=10px")
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
	/*
	$('#tab-content').mCustomScrollbar({
		scrollButtons:{
						enable:true
		}
	});
	*/
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

	var userProfile = null;

	getUserProfile(function(user){
		userProfile = ((Object.prototype.toString.call(user)=="[object Object]")?user:JSON.parse(user));
		$scope.userJob = userProfile.tipoUsuario;
		$scope.userPicture = userProfile.accesos[0].contenido.formulario[10].rutafoto||null;
		$scope.userAccess = userProfile.accesos;
		$scope.$apply();
	})



}]);