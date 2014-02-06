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
}])