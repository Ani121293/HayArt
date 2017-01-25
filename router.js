'use strict'
var express = require('express');
var controller = require('./controller');

module.exports = function(app){
    app.get('/index', controller.getIndex);//
    app.get('/about_us',controller.getAboutUs);
    app.get('/contacts',controller.getContacts); //
    app.post('/contacts',controller.addContacts);//
    app.put('/contacts',controller.updateContacts);//


    app.post('/products', controller.addProduct);//
    app.get('/products', controller.getProducts);//
    app.put('/products', controller.updateProduct);//
    app.delete('/products', controller.deleteProduct);//

    app.get('/details', controller.getDetails);
    app.post('/details', controller.addImage);//
    app.delete('/details', controller.deleteImage);//
    return app;
}
