var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var servidor = express();
//Global
var jsonParser = bodyParser.json();
var formulario = '<form method="post" action="/json">'
    + '<label for="nombre">¿Cómo te llamas?</label>'
    + '<input type="text" name="nombre" id="nombre">'	
    + '<input type="submit" value="Enviar"/>'
    + '</form>';
var cabecera = '<h1>Saludo</h1>';
servidor.get('/', function (req, res) {
	res.send('<html><body>'
			+ cabecera
			+ formulario
			+ '</html></body>'
	);
 
});
servidor.get('/json', function (req, res) {
	res.send('<html><body>'
			+ cabecera
			+ formulario
			+ '</html></body>'
	);
 
});
servidor.post('/json', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})
servidor.post('/', function (req, res) {
	var nombre = req.body.nombre || '';
	var saludo = '';
	if (nombre != '')
		saludo = "Hola " + nombre;
	res.send('<html><body>'
			+ cabecera
			+ '<p>' + saludo + '</p>'
			+ formulario
			+ '</html></body>'
	);
});
servidor.listen(8080);
console.log("El servidor escucha en el puerto 8080");


