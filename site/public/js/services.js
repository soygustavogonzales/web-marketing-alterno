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
					url:'/sismarketing/index.min.php/puestos/'
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
				$('input[type=date]').datepicker(
					{dateFormat: "yy-mm-dd"
					,minDate: "-70y"
					,maxDate: "-11m -17y"
					,changeYear:true
					,changeMonth:true
				});
		};
		this.modal = function(id,titulo,cuerpo,btns){
			/*
				cuerpo : DomELement que estara dentro del cuerpo del mensaje.
				btns: Arrays de botones;
			*/
			var _modal = $('<div class="modal fade" id="'+id.toString()+'"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+titulo.toString()+'</h4></div><div class="modal-body">'+cuerpo.toString()+'</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button></div></div></div></div>'); 
			return _modal;
		};

	}])
