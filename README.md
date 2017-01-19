# HayArt

The web application is for decorative stones.


- MongoDb 
	HayArt db
		1. mongo
		2. 'use Hayart'
		3. 'db.createCollection('products')'
		  	*************** products collection
			 product_name:{type: String, required: [true, 'Please insert the product name'], unique: true },
		         product_size: String,
        		 product_weight : String,
        		 product_image :{type: String, required: [true, 'Please upload the product image'], unique: true },
        		 product_types : [String],
        	         product_images : [String]
	
		4. 'db.createCollection('info')'		
			*************** info collection
			company_name : {type: String, required: [true, 'Please insert the company name'], unique: true},
        		phone_number :{type: String, required: [true, 'Please insert phone number'], unique: true},
        		address :{type: String, required: [true, 'Please insert address'], unique: true},
        		email : String,
    	                index : String,
    	                proverb : String,
    	                main_text :{type: String, required: [true, 'Please insert address']},
    	                about_us_text : String,
    	           	about_us_image : {type: String, required: [true, 'Please insert address']}
	1. db.products.ensureIndex({product_name: 1}, {unique: true, dropDups: true})
	2. db.info.ensureIndex({company_name: 1}, {unique: true, dropDups: true})

It should contain the following pages:\n
	- Index(main)\n
	- Products\n
	- Details\n
	- Photo_Gallery\n
	- Contacts\n
	- About Us\n
TODO
