appMKT.factory('appMKTServices*',['$http','globals',function($http,globals){
/*
*/
return {
		obtenerPuestos : function(estado,callback){
			/*	estado:String del puesto en la base de datos
				01:Activo
				02:Inactivo
		*/
			var puestos = [];
				$http({
					method:'GET',
					url:'/sismarketing/puestos/'
				})
				.success(function(data,status){
					angular.forEach(data, function(value, key){
						puestos.push(value);
					});
					callback(puestos)
				})
				.error(function(data,status){
					console.log("error al traer los datos ...")
					console.log(data)
				})

		},//obtenerPuestos

		activarDatePicker : function(){
				if(!Modernizr.inputtypes.date)
				$('input[type=date]').datepicker();
		}
}
}])
