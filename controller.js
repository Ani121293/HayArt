'use strict'
var model = require('./model')
var logger = require('./log')

    var addImageForProduct = function(Product, callback){
            var response;
            if(!Product.hasOwnProperty('product_name')) {
                         response = 'Please specify  \'' + product_name +' \' property!\n';
                    logger.error(response);
                    callback(response);
             }else if(!Product.hasOwnProperty('update')){
                         responose = 'Please specify added images with \'update\' property!\n';
                    logger.error(response);
                    callback(response);
            }
            var UpdateItem = Product['update'];
              var options = {runValidators: true, new: true};
            model.Product.findOneAndUpdate({product_name : Product.product_name}, {$push : UpdateItem}, options, function(err, doc){
            if (err) {
                         response = 'Couldn\'t add image for product \n' + err.errmsg + '\n';
                    logger.error(response);
                    callback(response);
            }else if (doc == null) {
                         response = 'The product with ' +  Product.product_name +' name is missing\n';
                    logger.warning(response);
                    callback(response);
            }else {
                         response = 'Image added successfully! ' + doc + '\n';
                    logger.info(response);
                    callback(response);
            }
    })};

    var deleteImageForProduct = function(Product, callback){
            var response;
            if(!Product.hasOwnProperty('product_name')) {
                         response = 'Please specify  \'' + product_name +' \' property!\n';
                    logger.error(response);
                    callback(response);
             }else if(!Product.hasOwnProperty('update')){
                         responose = 'Please specify added images with \'update\' property!\n';
                    logger.error(response);
                    callback(response);
            }
            var UpdateItem = Product['update'];
              var options = {runValidators: true, new: true};
            model.Product.findOneAndUpdate({product_name : Product.product_name}, {$pull : UpdateItem}, options, function(err, doc){
            if (err) {
                         response = 'Couldn\'t delete image for product \n' + err.errmsg + '\n';
                    logger.error(response);
                    callback(response);
            }else if (doc == null) {
                         response = 'The product with ' +  Product.product_name +' name is missing\n';
                    logger.warning(response);
                    callback(response);
            }else {
                         response = 'Image deleted successfully! ' + doc + '\n';
                    logger.info(response);
                    callback(response);
            }
    })};

    var updateProductFields = function(Product, callback){
            var response;
            if(!Product.hasOwnProperty(product_name)) {
                         response = 'Please specify  \'' + product_name +' \' property!\n'
                    logger.error(response);
                    callback(response);
             }else if(!Product.hasOwnProperty('update')){
                         responose = 'Please specify updatable items with \'update\' property!\n';
                    logger.error(response);
                    callback(response);
            }
            var UpdateItem = Product['update'];
              var options = {runValidators: true, new: true};
            model.Product.findOneAndUpdate({product_name : Product.product_name}, {$set : UpdateItem}, options, function(err, doc){
            if (err) {
                         respose = 'Couldn\'t update the product \n' + err.errmsg + '\n';
                    logger.error(response);
                    callback(response);
            }else if (doc == null) {
                         response = 'The product with ' +  Product.product_name +' name is missing\n';
                    logger.warning(response);
                    callback(response);
            }else {
                         response = 'Product updated successfully! ' + doc + '\n';
                    logger.info(response);
                    callback(response);
            }
    })};
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
     //     res.render('index.html');
          logger.info('Getting Main page\n  db.info.find({company_name : \'HayArt\'}, {about_us_image : 0, about_us_text : 0, _id : 0, company_name : 0}).pretty()');
     },

     getAboutUs : function(req, res){
          logger.info('Getting about_us page \n db.info.find({company_name : \'HayArt\'},{main_text : 0, company_name : 0, _id : 0}).pretty()');
     },

     getProducts : function(req,res) {
          logger.info('Getting products \n db.products.find({},{product_name : 1, product_image : 1, _id : 0}).pretty()');
//          res.render('products.html')
     },

     getDetails  : function(req,res) {
     //     var product_name = req.query.product_name;
     //     res.send("Here should be opened the page of \'' + product_name + '\' product");
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
          var Product =  req.body;
         updateProductFields(Product, function(response){
            logger.info(response);
            res.send(response);
        })
     },

     deleteProduct : function (req, res){
          logger.info('Deleting product\n db.products.remove({product_name : \'*productName*\'})');
          var product = new model.Product(req.body);
          model.Product.remove({ product_name : product.product_name }, function (err) {
                if (err) {
                     logger.error('Unable to delete the product \n' + err.errmsg);
                     res.send('Couldn\'t delete the product \n' + err.errmsg);
                }else {
                     logger.info('Product deleted successfully!')
                     res.send('Product deleted successfully!');
                }
          })
     },

     deleteImage : function(req, res){
          logger.info('Deleting image');
          var Product =  req.body;
         deleteImageForProduct(Product, function(response){
            logger.info(response);
            res.send(response);
        })
    },

     addImage : function(req, res){
          logger.info('Adding product image');
          var Product =  req.body;
         addImageForProduct(Product, function(response){
            logger.info(response);
            res.send(response);
        })
    }
}
