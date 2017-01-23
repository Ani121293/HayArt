'use strict'
var model = require('./model');
var logger = require('./log');

var update = function(Product,updateOperator, callback) {
    var UpdateItem = Product['update'];
    var options = { runValidators: true, new: true };
    var query;
    var message;
    switch(updateOperator){
        case 'addImage' :
              query = model.Product.findOneAndUpdate(
                {product_name : Product.product_name},
                {$push : UpdateItem},
                    options);
            message = 'Image add';
            break;
        case 'deleteImage' :
              query = model.Product.findOneAndUpdate(
                {product_name : Product.product_name},
                {$pull : UpdateItem},
                    options);
            message = 'Image delete';
            break;
        case 'updateProduct' :
              query = model.Product.findOneAndUpdate(
                {product_name : Product.product_name},
                {$set : UpdateItem},
                    options);
            message = 'Update';
            break;
    };
    query.exec(function(err,doc){
        var response;
        if (err) {
            response = message +  'ing failed \n' + err.errmsg + '\n';
            logger.error(response);
        } else {
            response = message + '(e)d successfully!\n' + doc + '\n';
            logger.info(response);
        }
        callback(response);
    })
};

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


     getDetails  : function(req,res) {
     //     var product_name = req.query.product_name;
     //     res.send("Here should be opened the page of \'' + product_name + '\' product");
          logger.info('Getting detail page of product \n db.products.find({product_name : \'*productName*\'},{ _id : 0}).pretty()');
     },
     
     addProduct : function(req, res) {
          var product = new model.Product(req.body);
          product.save(function(err, doc) {
                if (err) {
                     logger.error('Couldn\'t add the product \n' + err.errmsg);
                     res.send( 'Couldn\'t add the product \n' + err.errmsg);
                } else {
                     logger.info('Product saved successfully!');
                     res.send('Product saved successfully!');
                     console.log(doc);
                }
          });
     },

     updateProduct : function(req, res){
         var Product =  req.body;
         update(Product, 'updateProduct', function(response){
            logger.info(response);
            res.send(response);
        })
     },

     deleteProduct : function (req, res){
          var product = new model.Product(req.body);
          model.Product.remove({ product_name : product.product_name }, function (err) {
                if (err) {
                     logger.error('Couldn\'t delete the product \n' + err.errmsg);
                     res.send('Couldn\'t delete the product \n' + err.errmsg);
                }else {
                     logger.info('Product deleted successfully!')
                     res.send('Product deleted successfully!');
                }
          })
     },

     getProducts : function(req,res) {
        var product = req.query.product_name;
		var query;
        if(product != undefined){
            query = model.Product.find({product_name : product});
        } else {
            query = model.Product.find();
        }
        query.exec(function(err,doc){
                    if (err) {
                         logger.error('Couldn\'t find the product(s) \n' + err.errmsg);
                         res.send('Couldn\'t find the product(s) \n' + err.errmsg);
                    }else {
                         logger.info('Product(s) found successfully!' + doc);
                         res.send('Product(s) found successfully!' + doc);
                    }
        })

     },

     deleteImage : function(req, res) {
          var Product =  req.body;
          update(Product, 'deleteImage', function(response){
            logger.info(response);
            res.send(response);
          })
     },

     addImage : function(req, res){
          var Product =  req.body;
          update(Product,'addImage', function(response){
            logger.info(response);
            res.send(response);
        })
     }
}
