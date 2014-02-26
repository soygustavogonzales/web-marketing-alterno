sismarketingApp.service('serviceProfile', ['generalSvs',function(generalSvs){

		this.logOut = function(){
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
		};

		this.getUserProfile = function(callback){
			$.get('/sismarketing/profile/getjson',function(data){
				return callback(data)
			})
		};
		
		this.validationStyle = function(input,istrue,isfalse){
			return generalSvs.validationStyle(input,istrue,isfalse);
		};
		
}])