'use strict'

module.exports.getIndex = function(req,res) {
		res.render('index.html')
}

module.exports.getProducts = function(req,res) {
	res.render('products.html')
}

module.exports.getDetails = function(req,res) {
	res.render('details.html')
}

module.exports.getContacts = function(req,res) {
	res.render('contacts.html')
}

module.exports.getAboutUs = function(req,res) {
	res.render('about_us.html')
}
