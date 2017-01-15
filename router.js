'use strict'
var express = require('express');
var controller = require('./controller');
var router = express.Router();
	router.get('/index', controller.getIndex);
	router.get('/products', controller.getProducts);
	router.get('/details', controller.getDetails);
	router.get('/contacts',controller.getContacts);
	router.get('/about_us',controller.getAboutUs);

module.exports = router

