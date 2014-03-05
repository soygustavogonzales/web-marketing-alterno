var l = console.log,
http = require('http'),
express = require('express'),
jade = require('jade'),
app = express(),
less = require('less'),
path = require('path'),
fs = require('fs'),
toCss = require('./serverLess.js'),
jade = require('jade'),
server = http.createServer(app);
app.configure(function(){
	app.set('port',process.env.PORT||8081);
	app.use('/public',express.static(__dirname+"/site/public"));
	app.use('/sismarketing',express.static(__dirname+"/site/sismarketing"));
	app.use("views",__dirname+"/views");
	app.use(express.bodyParser());
	app.use(app.router);
	app.locals.pretty = true;
	app.set('view engine','jade');
	app.use(function(req,res){
		res.send(404,"<h1>OOps Page not found !!</h1>");
	})
});

/*
*/
var watchFilesLess = function(listaLibros){
	listaLibros.forEach(function(pathBook,key){
		console.log(pathBook);
		fs.watchFile(pathBook,function(after,current){
			var cssFile = toCss(pathBook,{
				less:less,
				fs:fs,
				path:path
			})
			console.log("css creado");
		});
	})
}

	var rutasLess = [
	__dirname+'/site/sismarketing/css/css/profile.less'//custom styles for profile.php|profile.html|profile.jade
	,__dirname+'/site/sismarketing/css/css/style.less'//custom styles for login.php|login.html|login.jade
	];

watchFilesLess(rutasLess);
//console.log(rutas);

	var lessFile = __dirname+'/site/public/styles/css/trabaja_con_nosotros.less';

app.get('/',function(req,res){
	res.sendfile(__dirname+'/site/'+'index.html');
});

app.get('/:file',function(req,res){
	var pagina = req.params.file;
	res.sendfile(__dirname+'/site/'+pagina);
});

app.get('/sismarketing/login',function(req,res){
	res.render(__dirname+'/site/sismarketing/application/views/login.jade',{pretty:true})
})

app.post('/sismarketing/loginsend',function(req,res){
	var data = req.body.data;
	console.log(req.body);
	console.log(data);
	res.send("http://localhost:"+app.get('port')+'/sismarketing/profile');
	//res.redirect('/sismarketing/profile');
})

app.get('/sismarketing/profile',function(req,res){
	//var pathFile = __dirname+'/site/sismarketing/application/views/profile.jade';
	var pathFile = __dirname+'/site/sismarketing/application/views/prueba2.jade';
	var jadeTemp = jade.compile(fs.readFileSync(pathFile,'utf8')
		,{
			filename:pathFile,
			pretty:true
		});
	var html = jadeTemp({
		idTipoUser:5,
		nombre:'Gustavo Gonzales',
		lastname:'Taylor'
	})

	res.send(html);
	/*
	*/
})
/*
*/
app.get('/sismarketing/:file',function(req,res){
	var pagina = req.params.file;
		console.log(pagina);
		res.render(__dirname+'/site/sismarketing/application/views/'+pagina);
})

app.get('/sismarketing/index.min.php/puestos/',function(req,res){
	res.json([
		{puesto_id:'1',puesto_nombre:'promotor',puesto_descripcion:'descripcion de promotor',puesto_require:"01"},
		{puesto_id:'2',puesto_nombre:'anfitrion',puesto_descripcion:'descripcion de anfitrion',puesto_require:"02"},
		{puesto_id:'3',puesto_nombre:'mercaderista',puesto_descripcion:'descripcion de mercaderista',puesto_require:"01"},
		{puesto_id:'3',puesto_nombre:'sistemas',puesto_descripcion:'descripcion de sistemas',puesto_require:"01"}
		])
});

app.put('/sismarketing/index.min.php/seleccioncontrol/postulantecontrol/guardarpostulante',function(req,res){
	console.log(req.body.data);
	res.send(true);
})

app.get('/sismarketing/profile/getjson',function(req,res){
	var userProfile = {"nombreUsuario":"Milagros Andrade","tipoUsuario":"RR.HH","fotoUsuario":"http://marketing-alterno.com/sismarketing/fotosmkt/milagros.jpg","accesos":{"modificarDatos":{"nombre":"Modificar Datos","estilos":{"icono":"fa-cog"},"id":"1","URI":{"nombre":"actualizarDatosPersonales","uri":"sismarketing/actualizar/empleado"},"contenido":{"formulario":{"nombres":{"nombre":"nombres","value":"Milagros","id":"0"},"apellidoP":{"nombre":"apellido paterno","value":"Andrade","id":"1"},"apellidoM":{"nombre":"apellido materno","value":"Andrade","id":"2"},"estadoCivil":{"nombre":"Estado civil","selected":"soltero(a)","id":"3"},"dni":{"nombre":"dni","value":"1234","id":"4","visible":"false"},"correo":{"nombre":"correo","value":"mandrade@marketing-alterno.com","id":"5"},"telefono":{"nombre":"telefono","value":"1234","id":"6"},"celular":{"nombre":"celular","value":"1234","id":"7"},"domicilio":{"nombre":"domicilio","value":"direccion","id":"8"},"referenciaDomicilio":{"nombre":"referencia domicilio","value":"refe","id":"9"}}}},"postulante":{"nombre":"Lista de Postulantes","estilos":{"icono":"fa-cog"},"id":"2","URI":{"nombre":"actualizarDatosPersonales","uri":"sismarketing/actualizar/empleado"},"contenido":{"formulario":{"nombres":{"nombre":"nombres","value":"Milagros","id":"0"},"apellidoP":{"nombre":"apellido paterno","value":"Andrade","id":"1"},"apellidoM":{"nombre":"apellido materno","value":"Andrade","id":"2"},"estadoCivil":{"nombre":"Estado civil","selected":"soltero(a)","id":"3"},"dni":{"nombre":"dni","value":"1234","id":"4","visible":"false"},"correo":{"nombre":"correo","value":"mandrade@marketing-alterno.com","id":"5"},"telefono":{"nombre":"telefono","value":"1234","id":"6"},"celular":{"nombre":"celular","value":"1234","id":"7"},"domicilio":{"nombre":"domicilio","value":"direccion","id":"8"},"referenciaDomicilio":{"nombre":"referencia domicilio","value":"refe","id":"9"}}}},"trabajarPuestos":{"id":"3","nombre":"Puesto","estilos":{"icono":"fa-plus-square-o"},"URI":{"nombre":"consultarPuesto","uri":"sismarketing/consultar/puestos","nombre2":"crearPueesto","uri2":"sismarketing/crear/puesto"},"contenido":{"formulario":[{"nombre":"nombre","nodo":"input","type":"text","value":"","id":"0"},{"nombre":"Filtrar Por","nodo":"select","options":["fecha","nombre"],"selected":"nombre","id":"1"},{"nombre":"consultar","nodo":"button","type":"submit","value":"consultarPuesto","id":"2"},{"nombre":"crear","nodo":"button","type":"","value":"callpopup","action":"modal","id":"3"}],"popup":{"nombre":"callpopup","id":"0","formulario":[{"nombre":"nombre puesto","nodo":"input","type":"text","value":"","id":"4"},{"nombre":"detalle Puesto","nodo":"input","type":"textArea","value":"","id":"5"},{"nombre":"datos especiales","texto":"Peso, Talla, Foto","nodo":"Check","value":"","id":"6"},{"nombre":"guardar","nodo":"button","type":"submit","value":"crearPuesto","id":"7"}]}}}}}
	res.json(userProfile)
});

server.listen(app.get('port'),function(){
	l("server running in port: "+app.get('port'));
});
