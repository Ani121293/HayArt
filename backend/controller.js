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
          var contact = new model.Contact(req.body);
          contact.save(function(err, doc) {
                if (err) {
                     logger.error('Couldn\'t add the contact information \n' + err.errmsg);
                     res.send( 'Couldn\'t add the contact information \n' + err.errmsg);
                } else {
                     logger.info('Information saved successfully!');
                     res.send('Information saved successfully!');
                     console.log(doc);
                }
          });
    },

     getContacts : function (req, res) {
        var contact = req.query.contact_name;
        var query = model.Contact.find();
        query.exec(function(err,doc){
                    if (err) {
                         logger.error('Couldn\'t find the contact \n' + err.errmsg);
                         res.send('Couldn\'t find the contact \n' + err.errmsg);
                    }else {
                         logger.info('Contact found successfully!' + doc);
                         res.send('Contact found successfully!' + doc);
                    }
        })
     },

     updateContacts : function (req, res){
        var UpdateContact = req.body['update'];
        var options = { runValidators: true, new: true };
        var query = model.Contact.findOneAndUpdate(
                    {contact_name : UpdateContact.contact_name},
                    {$set : UpdateContact},
                        options);
        query.exec(function(err,doc){
            var response;
            if (err) {
                response = 'Contact updating failed \n' + err.errmsg + '\n';
                logger.error(response);
            } else {
                response = 'Contact updated successfully!\n' + doc + '\n';
                logger.info(response);
            }
            res.send(response);
        })
    },

     getIndex  : function(req, res) {
     //     res.render('index.html');
            var query = model.Contact.find({company_name :"HayArt"}).select({about_us_image : 0, about_us_text : 0, _id : 0, company_name : 0});
            query.exec(function(err,doc){
            var response;
            if (err) {
                response = 'Couldn\'t get contact information for index page\n' + err.errmsg + '\n';
                logger.error(response);
            } else {
                response = 'Contact information got successfully!\n' + doc + '\n';
                logger.info(response);
            }
            res.send(response);
        })
     },

     getAboutUs : function(req, res){
            var query = model.Contact.find({company_name :"HayArt"}).select({main_text : 0, company_name : 0, _id : 0});
            query.exec(function(err,doc){
            var response;
            if (err) {
                response = 'Couldn\'t get contact information for about us page\n' + err.errmsg + '\n';
                logger.error(response);
            } else {
                response = 'Contact information got successfully for about us page!\n' + doc + '\n';
                logger.info(response);
            }
            res.send(response);
        })
     },

     getDetails  : function(req,res) {
        var req_product_name = req.query.product_name;
        var query = model.Product.find({product_name : req_product_name});
        query.exec(function(err,doc){
                    if (err) {
                         logger.error('Couldn\'t find the' + req_product_name  + 'product\n' + err.errmsg);
                         res.send('Couldn\'t find the' + req_product_name  + 'product\n' + err.errmsg);
                    }else {
                         logger.info('Product found successfully!' + doc);
                         res.send('Product found successfully!' + doc);
                    }
        })
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
        var query = model.Product.find().select({ _id : 0, product_image : 1, pr_name : 1, product_name : 1});
        query.exec(function(err,doc){
                    if (err) {
                         logger.error('Couldn\'t find the product(s) \n' + err.errmsg);
                         res.send(err.errmsg);
                    }else {
                         logger.info('Product(s) found successfully!' + doc);
                         res.send(doc);
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

     addImage : function(req, res) {
          var Product =  req.body;
          update(Product,'addImage', function(response){
            logger.info(response);
            res.send(response);
        })
    },
    getGallery : function(req,res) {
        var product = req.query.product_name;
        var query;
        if(product != undefined){
            query = model.Product.find({product_name : product}).select({ _id : 0,product_name : 1, product_images : 1});
        } else {
            query = model.Product.find().select({ _id : 0, product_name : 1,product_images : 1});
        }
        query.exec(function(err,doc){
                    if (err) {
                         logger.error('Couldn\'t find images \n' + err.errmsg);
                         res.send('Couldn\'t find images \n' + err.errmsg);
                    }else {
                         logger.info('Images found successfully!' + doc);
                         res.send('Images found successfully!' + doc);
                    }
        })
    }
}
