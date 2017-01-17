'use strict'

module.exports = { 


	addContacts : function(req, res) {
		logger.info("Adding contact to db\n  db.info.insert({ company_name : 'HayArt', phone_number : '(+374) 77 40 18 14', address : 'q.VANADZOR, Mashtoci 47', email : 'hayk7090@mail.ru', index : '2015', proverb : 'xorimast mtqer el du sus', main_text : 'The text for main page', about_us_text : 'We are the best company!!!', about_us_image : 'images/other/1.png'})")
	},

	getContacts : function (req, res) {
		logger.info("Getting contacts \n db.info.find({company_name : 'HayArt'}, {phone_number : 1, email : 1, address: 1, index : 1, proverb : 1, _id : 0}).pretty()")
	},

	updateContacts : function (req, res){
		logger.info("Update Contacts\n  db.info.update({company_name : 'HayArt'}, {$set:{'index':'*newIndex*'}})")
	},

	getIndex  : function(req, res) {
	//	res.render('index.html')
		logger.info("Getting Main page\n  db.info.find({company_name : 'HayArt'}, {about_us_image : 0, about_us_text : 0, _id : 0, company_name : 0}).pretty()")
	},

	getAboutUs : function(req, res){
		logger.info("Getting about_us page \n db.info.find({company_name : 'HayArt'},{main_text : 0, company_name : 0, _id : 0}).pretty()")
	},

	getProducts : function(req,res) {
		logger.info("Getting products \n db.products.find({},{product_name : 1, product_image : 1, _id : 0}).pretty()")
//		res.render('products.html')
	},	

	getDetails  : function(req,res) {
	//	var product_name = req.query.product_name;
	//	res.send("Here should be opened the page of \'' + product_name + '\' product");
		logger.info("Getting detail page of product \n db.products.find({product_name : '*productName*'},{ _id : 0}).pretty()")
	},
	
	addProduct : function(req, res) {
		logger.info("Adding product to db\n db.products.insert({ product_name : '*productName*', product_size : '*size*', product_weight : '*weight*', product_image : '*image*', product_types : ['image1', 'image2'], product_images :['image3', 'image4']})")
	},
	updateProduct : function(req, res){
		logger.info("Updating product detail \n db.products.update({product_name : '*productName*'},{$set:{'*key*':'*newValue*'}})")
	},

	deleteProduct : function (req, res){
		logger.info("Deleting product\n db.products.remove({product_name : '*productName*'})")
	},

	deleteImage : function(req, res){
		logger.info("Deleting product type\n db.products.update({product_name : '*productName*'}, {$pull : {'*key*' : '*path*'}})")

	},
	addImage : function(req, res){
		 logger.info("Deleting product type\n db.products.update({product_name : '*productName*'}, {$push : {'*key*' : '*path*'}})")

	}
}
