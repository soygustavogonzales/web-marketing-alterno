var l = console.log,
http = require('http'),
express = require('express'),
app = express(),
server = http.createServer(app);
app.configure(function(){

	app.set('port',process.env.PORT||8080);
	app.use(express.static(__dirname+"/public"));
	app.use("views",__dirname+"/views");
	app.set('view engine','jade');

})

app.get('/',function(req,res){
	res.sendfile(__dirname+'/views/'+'index.html');
});

app.get('/:file',function(req,res){
	var pagina = req.params.file;
	res.sendfile(__dirname+'/views/'+pagina);
});

server.listen(app.get('port'),function(){
	l("server running in port: "+app.get('port'));
});