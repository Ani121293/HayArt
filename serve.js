var express = require('express');
var app = express();

var server = require('http').createServer(app);

//server-configuration 
var path = require('path');
var appDir = path.dirname(require.main.filename);
app.set('view engine', 'ejs');
app.set('views', appDir+ "/WebContent/view/");
app.engine('html', require('ejs').renderFile);
	
// controller
var getIndex = function(req, res) {
	res.render('index.html')
	console.log("Rendering index page!!!!")
}

var getProducts = function(req,res) {
	res.render('products.html')
}

var getDetails = function(req,res) {
	res.render('details.html')
}

var getContacts = function(req,res) {
	res.render('contacts.html')
}

var getAboutUs = function(req,res) {
	res.render('about_us.html')
}

//router
app.get('/index', getIndex);
app.get('/products', getProducts);
app.get('/details', getDetails);
app.get('/contacts',getContacts);
app.get('/about_us',getAboutUs);

server.listen(8081,'127.0.0.1', function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})