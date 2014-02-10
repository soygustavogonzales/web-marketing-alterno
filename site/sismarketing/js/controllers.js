sismarketingApp.controller('loginCtrl',['$scope','$http',function($scope,$http){
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
				/*
				var jqxhr = $.ajax({
					type:"post",
					url:"/sismarketing/loginsend",
					data:obj
				})
				jqxhr.done(function(data,status){
					console.log(data);
					if(data=="false"){
						alert("email or password incorrect")
					}
				});
				*/
				$.post("/sismarketing/loginsend"
					,obj
					,function(data){
						console.log(data);
						if(data=="false"){
							alert("email or password incorrect")
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
			if(lateralContent.status)//visible
				lateralContent.status = false;//oculto
			else
				lateralContent.status = true;
			$('.cuerpo').css({
				"margin-left":((lateralContent.status)?"2.5%":"7.5%"),
				"top":((lateralContent.status)?"-442px":"-598px")
			})
			$('.cuerpo').animate({
				"width":((lateralContent.status)?"-="+(lateralContent.distMover-10)+"px":"+="+(lateralContent.distMover-10)+"px"),
			},1)
			$('.lat-footer').animate({
				"left":((lateralContent.status)?"+":"-")+"="+lateralContent.distMover+"px"
			},800);

				$('.foto').animate({
					"width":((lateralContent.status)?"170px":"200px"),
					"height":((lateralContent.status)?"170px":"200px"),
					"top":((lateralContent.status)?"+=10px":"-=10px")
				},{
					duration:800,
					easing:"linear"
				})
		});	
	}

	var getJSON = function(callback){
		$.get('/sismarketing/profile/getJSON',function(data){
			return callback(data)
		})
	}

	getJSON(function(data){
		console.log(data);
	})


}]);