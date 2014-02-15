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
				$http({
					method:"post",
					url:"/sismarketing/index.min.php/loginsend",
					data:obj
				}).success(function(data,status){
					console.log(data);
					if(data=="false"){
						alert("email or password incorrect")
					}
				})
			}
		}
}])