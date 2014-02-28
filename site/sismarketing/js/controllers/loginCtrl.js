sismarketingApp.controller('loginCtrl',['$scope','$http','$location','generalSvs',function($scope,$http,$location,generalSvs){
			console.log(
				$location.protocol()+"\n"+//http
				$location.host()+"\n"+//www.marketing-alterno.com
				$location.port()//80
			)
/*
*/
		$scope.validationStyle = function(input,istrue,isfalse){
			//console.log($scope.loginForm)
			//eturn ((input.$invalid)?isfalse:istrue);
			return generalSvs.validationStyle(input,istrue,isfalse);
		};

		var routerP = $location.protocol()
																	+"://"+$location.host()
																	+":"+$location.port();

		$scope.submitForm = function(){
			if($scope.loginForm.$valid)
				console.log($scope.loginForm)
				{
					var obj = {
						email:$scope.email,
						password:$scope.password
					}
					console.log(obj);
				//$http.post();
				$.post("/sismarketing/loginsend"
					,obj
					,function(data){
							console.log(data);
						if(data=="false"){
							alert("email or password incorrect")
						}else{
							console.log("Seras redireccionado...")
							location.assign(routerP+"/sismarketing/profile")
							//$location.url('/profile');
						}
					});

			}//if
		}
}]);
