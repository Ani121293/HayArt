'use strict'
var express = require('express');
var controller = require('./controller');
	
module.exports = function(app){
	app.get('/index', controller.getIndex);
	app.get('/products', controller.getProducts);
	app.get('/details', controller.getDetails);
	app.get('/contacts',controller.getContacts);
	app.get('/about_us',controller.getAboutUs);
	return app
}


