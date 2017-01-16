'use strict'

module.exports = { 
	getIndex  : function(req, res) {
		res.render('index.html')
		logger.info("Rendering index page!!!!")
	},
	getProducts : function(req,res) {
		res.render('products.html')
	},	
	getDetails  : function(req,res) {
		var product_name = req.query.product_name;
		res.send('Here should be opened the page of \"' + product_name + '\" product');
	},
	getContacts : function(req,res) {
		res.render('contacts.html')
	},
	getAboutUs :  function(req,res) {
		res.render('about_us.html')
	}	
}
