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
	app.use("views",__dirname+"/views");
	app.use(express.bodyParser());
	app.set('view engine','jade');
});

var lessFile = __dirname+'/site/public/styles/css/trabaja_con_nosotros.less';
fs.watchFile(lessFile,function(after,current){	
	var cssFile = toCss(lessFile,{
		less:less,
		fs:fs,
		path:path
	})
});

l(toCss(lessFile,{less:less,fs:fs,path:path}))
app.get('/',function(req,res){
	res.sendfile(__dirname+'/site/'+'index.html');
});

app.get('/:file',function(req,res){
	var pagina = req.params.file;
	res.sendfile(__dirname+'/site/'+pagina);
});

app.get('/sismarketing/puestos',function(req,res){
	res.json([
		{puesto_id:'1',puesto_nombre:'promotor',puesto_descripcion:'descripcion de promotor'},
		{puesto_id:'2',puesto_nombre:'anfitrion',puesto_descripcion:'descripcion de anfitrion'},
		{puesto_id:'3',puesto_nombre:'mercaderista',puesto_descripcion:'descripcion de mercaderista'}
		])
});
server.listen(app.get('port'),function(){
	l("server running in port: "+app.get('port'));
});