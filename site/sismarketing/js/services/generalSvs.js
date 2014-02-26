sismarketingApp.service('generalSvs',['$location','$http',function($location,$http){
	this.validationStyle = function(input,istrue,isfalse){
		//console.log($scope.loginForm)
		return ((input.$invalid)?isfalse:istrue);
	};
}])