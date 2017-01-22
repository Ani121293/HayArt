'use strict'
var model = require('./model')
var logger = require('./log')

module.exports = {


    addContacts : function(req, res) {
        logger.info('Adding contact to db\n  db.info.insert({ company_name : \'HayArt\', phone_number : \'(+374) 77 40 18 14\', address : \'q.VANADZOR, Mashtoci 47\', email : \'hayk7090@mail.ru\', index : \'2015\', proverb : \'xorimast mtqer el du sus\', main_text : \'The text for main page\', about_us_text : \'We are the best company!!!\', about_us_image : \'images/other/1.png\'})');
    },

    getContacts : function (req, res) {
        logger.info('Getting contacts \n db.info.find({company_name : \'HayArt\'}, {phone_number : 1, email : 1, address: 1, index : 1, proverb : 1, _id : 0}).pretty()');
    },

    updateContacts : function (req, res){
        logger.info('Update Contacts\n  db.info.update({company_name : \'HayArt\'}, {$set:{\'index\':\'*newIndex*\'}})');
    },

    getIndex  : function(req, res) {
    //    res.render('index.html');
        logger.info('Getting Main page\n  db.info.find({company_name : \'HayArt\'}, {about_us_image : 0, about_us_text : 0, _id : 0, company_name : 0}).pretty()');
    },

    getAboutUs : function(req, res){
        logger.info('Getting about_us page \n db.info.find({company_name : \'HayArt\'},{main_text : 0, company_name : 0, _id : 0}).pretty()');
    },

    getProducts : function(req,res) {
        logger.info('Getting products \n db.products.find({},{product_name : 1, product_image : 1, _id : 0}).pretty()');
//        res.render('products.html')
    },

    getDetails  : function(req,res) {
    //    var product_name = req.query.product_name;
    //    res.send("Here should be opened the page of \'' + product_name + '\' product");
        logger.info('Getting detail page of product \n db.products.find({product_name : \'*productName*\'},{ _id : 0}).pretty()');
    },
    
    addProduct : function(req, res) {
        logger.info('Adding product to db\n');
        var product = new model.Product(req.body);
        product.save(function(err, doc) {
            if (err) {
                logger.error('Unable to add the product \n' + err.errmsg);
                res.send('Unable to add the product \n' + err.errmsg);
            } else {
                logger.info('Product saved successfully!');
                res.send('Product saved successfully!');
                console.log(doc);
            }
        });
    },
    updateProduct : function(req, res){
        logger.info('Updating product detail \n db.products.update({product_name : \'*productName*\'},{$set:{\'*key*\':\'*newValue*\'}})');
        var product =  req.body;
        var options = {runValidators: true, new: true};
        var updateProperty = Object.keys(product)[1];
        var updateParam = {};
        updateParam[updateProperty] = product[updateProperty];
        model.Product.findOneAndUpdate({product_name : product.product_name}, {$set : updateParam}, options, function(err, doc){
            if (err) {
                logger.error('Couldn\'t update the product \n' + err.errmsg);
                res.send('Couldn't update the product \n' + err.errmsg);
            } else if (doc == null) {
                logger.info('The product with \'' +  product.product_name +'\'   name is missing');
                res.send('The product with ' +  product.product_name +'name is missing');
            } else if (doc != null) {
                logger.info('Product updated successfully!');
                console.log(doc);
                res.send('Product updated successfully!');
            }
        })},

    deleteProduct : function (req, res){
        logger.info('Deleting product\n db.products.remove({product_name : \'*productName*\'})');
        var product = new model.Product(req.body);
        model.Product.remove({ product_name : product.product_name }, function (err) {
            if (err) {
                logger.error('Unable to delete the product \n' + err.errmsg);
                res.send('Couldn't delete the product \n' + err.errmsg);
            }else {
                logger.info('Product deleted successfully!');
                res.send('Product deleted successfully!');
            }
        })
    },

    deleteImage : function(req, res){
        logger.info('Deleting product type\n db.products.update({product_name : \'*productName*\'}, {$pull : {\'*key*\' : \'*path*\'}})');

    },
    addImage : function(req, res){
         logger.info('Deleting product type\n db.products.update({product_name : \'*productName*\'}, {$push : {\'*key*\' : \'*path*\'}})');

    }
}
