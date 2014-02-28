sismarketingApp.controller('profileGeneralCtrl', ['$scope','$location','serviceProfile', function($scope,$location,serviceProfile){
		
	$('#accesos a').on('click',function(e){
		console.log("click")
		e.preventDefault();
		$(this).tab('show');
	})

			var lateralContent = $('.lat-content');
			lateralContent.status = true;//visible 
				var routerP = $location.protocol()
																		+"://"+$location.host()
																		+":"+$location.port();	

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
				lateralContent.status = ((lateralContent.status)?false:true);
			});	
		}

		$scope.getActive = function(id){
			return ((id == '0')?"active":"")
		}

		$scope.logOut = function(){
			var routerP = $location.protocol()
															+"://"+$location.host()
															+":"+$location.port();	
			serviceProfile.logOut(routerP+'/sismarketing/login');
		}

		$scope.getUserProfile = function(callback){
			$.get('/sismarketing/profile/getjson',function(data){
				return callback(data)
			})
		}

		$scope.refreshDataScope = function(data){
			$scope.userPicture = data.userPicture;
			$scope.userName = data.userName;
			$scope.apply();
		}

}])
