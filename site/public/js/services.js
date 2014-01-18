appMKT.service('appMKTServices',['$http','globals',function($http,globals){
/*
*/
		this.obtenerPuestos = function(estado,callback){
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

		};//obtenerPuestos

		this.activarDatePicker = function(){
				if(!Modernizr.inputtypes.date)
				$('input[type=date]').datepicker();
		};
		this.modal = function(titulo,cuerpo,btns){
			/*
				cuerpo : DomELement que estara dentro del cuerpo del mensaje.
				btns: Arrays de botones;
			*/
			var _modal = $('<div class="modal fade" id="myModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button></div></div></div></div>'); 
			_modal.find('.modal-body').append(cuerpo.toString());
			_modal.find('.modal-header').append(tituto.toString());
			return _modal;
		}
}])
