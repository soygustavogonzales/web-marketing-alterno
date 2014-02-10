var l = console.log,
http = require('http'),
express = require('express'),
app = express(),
less = require('less'),
path = require('path'),
fs = require('fs'),
toCss = require('./serverLess.js'),
server = http.createServer(app);
app.configure(function(){
	app.set('port',process.env.PORT||8080);
	app.use('/public',express.static(__dirname+"/site/public"));
	app.use('/sismarketing',express.static(__dirname+"/site/sismarketing"));
	app.use("views",__dirname+"/views");
	app.use(express.bodyParser());
	app.use(app.router);
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
	//res.sendfile(__dirname+"/site/sismarketing/application/views/index.html");
})


app.post('/sismarketing/loginsend',function(req,res){
	var data = req.body.data;
	console.log(req.body);
	console.log(data);
	res.send("true")
})

app.get('/sismarketing/:file',function(req,res){
	var pagina = req.params.file;
	console.log(pagina);
	res.render(__dirname+'/site/sismarketing/application/views/'+pagina,{pretty:true})
	//res.sendfile(__dirname+"/site/sismarketing/application/views/index.html");
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

app.get('/sismarketing/profile/getJSON',function(req,res){
	var superJSON = {
		data:"hola"
	}
	res.json(superJSON)
});

server.listen(app.get('port'),function(){
	l("server running in port: "+app.get('port'));
});