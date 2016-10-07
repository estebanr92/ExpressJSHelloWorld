var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Hello world");
});

app.get('/esteban',function(req,res){
	res.send('El futuro si existe, consiguelo');
	ńext
});


app.listen(3000,function(){
	console.log('Bienvenido');
})