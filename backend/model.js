'use strict'
var  mongoose = require('mongoose')
var Schema = mongoose.Schema;


var productSchema = new Schema({
    pr_name :  {type: String, required: [true, 'Please insert the product name in Armenian'], unique: true },
    product_name : {type: String, required: [true, 'Please insert the product name'], unique: true },
    product_size : String,
    product_weight : String,
    product_image : {type: String, required: [true, 'Please upload the product image'], unique: true },
    product_types : [String],
    product_images : [String]
});


var contactSchema = new Schema({
    company_name : {type: String, required: [true, 'Please insert the company name'], unique: true},
    phone_number : {type: String, required: [true, 'Please insert phone number'], unique: true},
    address : {type: String, required: [true, 'Please insert address'], unique: true},
    email : String,
    index : String,
    proverb : String,
    main_text : {type: String, required: [true, 'Please insert address']},
    about_us_text : String,
    about_us_image : {type: String, required: [true, 'Please insert address']}
})

var Contact = mongoose.model('Contact', contactSchema);
var Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
module.exports.Contact = Contact;
