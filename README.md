# HayArt

## Web application is for decorative stones.

**GUI should contain the following pages:**
    1.  Index(main) 1
    2.  Products 2
    3.  Details 3
    4.  PhotoGallery 4
    5.  Contacts 5
    6.  About Us 6

**We used the following frameworks to structure our application:**
	* mongodb - to store data 1
	* nodejs - to create server 2
	* angular2 - to create GUI 3


###1. MongoDb ###
	In order to create your local db, please do the following steps:
	```
		mongorestore  --db HayArt HayArt_mongoDB/
	```
	In db there are 2 collections:
	    1. info 1
			* Stores the following types of information(they are the properties of docss stored in the collection) 1a
				* company_name 1a
				* phone_number 2a
				* address 3a
				* index 4a
				* proverb 5a
				* main_text 6a
				* about_us_text 7a
				* about_us_image 8a

        2. products 2
			* Stores the following types of information(they are the properties of docss stored in the collection) 1a
				* product_name(unique) 1a
				* product_size 2a
				* product_weight 3a
				* product_image(unique) 4a
				* product_types 5a
				* product_images 6a

### 2. API calls ###
	####1.PRODUCTS####
		* get all products: 1
			```
				curl -X GET http://127.0.0.1:8081/products
			```
		* get one product: 2
			```
				curl -X GET http://127.0.0.1:8081/products?product_name=<product_name>
			```
		* add a product: 3
			```
				curl -X POST http://127.0.0.1:8081/products -d '{"product_name":"elen","product_size":"4.4*3.2","product_weight":"0.5kg","product_image":"enenikos.gpg","product_types":["t1.png","t2.png"],"product_images":["i1.png, i2.png"]}' -H   "Content-Type: application/json"
			```
		* update a product: 4
			```
				curl -X PUT http://127.0.0.1:8081/products -d '{"product_name":"elen", "update" : {"product_image":"kuku.png"}}' -H   "Content-Type: application/json"
			```
		* delete a product: 5
			```
				 curl -X DELETE http://127.0.0.1:8081/products -d '{"product_name":"elen"}' -H   "Content-Type: application/json"
			```

		* delete an image(in product_images and product_types): 6
			```
				 curl -X DELETE http://127.0.0.1:8081/details -d '{"product_name" : "elen", "update":{"product_images" :  "i1.png"}}' -H "Content-Type: application/json"

			```
		* add an image(in product_images and product_types): 7
			```
				curl -X POST http://127.0.0.1:8081/details -d '{"product_name" : "enen", "update":{"product_types" :  "added_type.png"}}' -H "Content-Type: application/json"
			```
