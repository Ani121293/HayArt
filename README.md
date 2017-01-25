# HayArt

## Web application is for decorative stones.

* **GUI should contain the following pages:**
    1.  Index(main)
    2.  Products
    3.  Details
    4.  PhotoGallery
    5.  Contacts
    6.  About Us

* **We used the following frameworks to structure our application:**
	* mongodb - to store data
	* nodejs - to create server
	* angular2 - to create GUI


## MongoDb

###	In order to create your local db, please do the following step:

```
		mongorestore  --db HayArt HayArt_mongoDB/
```

###	In db there are 2 collections:

#####	1. CONTACTS
			* Stores the following types of information(they are the properties of docss stored in the collection) 1a
				* company_name
				* phone_number
				* address
				* index
				* proverb
				* main_text
				* about_us_text
				* about_us_image

####	2. PRODUCTS
			* Stores the following types of information(they are the properties of docss stored in the collection)
				* product_name(unique)
				* product_size
				* product_weight
				* product_image(unique)
				* product_types
				* product_images

### API calls
####	 1.PRODUCTS
#####	get all products:

```
				curl -X GET http://127.0.0.1:8081/products
```

#####	get one product:

```
				curl -X GET http://127.0.0.1:8081/products?product_name=<product_name>
```

#####	add a product:

```
				curl -X POST http://127.0.0.1:8081/products -d '{"product_name":"elen","product_size":"4.4*3.2","product_weight":"0.5kg","product_image":"enenikos.gpg","product_types":["t1.png","t2.png"],"product_images":["i1.png, i2.png"]}' -H   "Content-Type: application/json"
```

#####	update a product:

```
				curl -X PUT http://127.0.0.1:8081/products -d '{"product_name":"elen", "update" : {"product_image":"kuku.png"}}' -H   "Content-Type: application/json"
```

#####	delete a product:

```
				 curl -X DELETE http://127.0.0.1:8081/products -d '{"product_name":"elen"}' -H   "Content-Type: application/json"
```
#####	delete an image(in product_images and product_types):
```
				 curl -X DELETE http://127.0.0.1:8081/details -d '{"product_name" : "elen", "update":{"product_images" :  "i1.png"}}' -H "Content-Type: application/json"
```
#####	add an image(in product_images and product_types):

```
				curl -X POST http://127.0.0.1:8081/details -d '{"product_name" : "enen", "update":{"product_types" :  "added_type.png"}}' -H "Content-Type: application/json"
```
#####	get images for gallery:

```
				curl -X GET http://127.0.0.1:8081/gallery
```
#####	get image of specified product:

```
				curl -X GET http://127.0.0.1:8081/gallery?product_name=<product_name>
```
#####	get details of specified product:

```
				curl -X GET http://127.0.0.1:8081/details?product_name=<product_name>
```
####	 2.CONTACTS

#####	 add contact information:
```
			curl -X POST http://127.0.0.1:8081/contacts -d '{"company_name":"HayArt","phone_number":"(+374) 77 40 18 17","address":"q.VANADZOR, Mashtoci 47","email":"hayk7090@mail.ru","index":"2000","proverb":"xorimast mtqer el du sus","main_text":"The text for main page","about_us_text":"We are the best company!!!","about_us_image":"images/other/1.png"}' -H   "Content-Type: application/json" 	
```
#####	 update contact information:
```
				curl -X PUT http://127.0.0.1:8081/contacts -d '{"company_name":"HayArt", "update" :{"phone_number":"(+374) 99 70 90"}}' -H   "Content-Type: application/json" 
```
#####	 get contact information for contact page:
```
			curl -X GET http://127.0.0.1:8081/contacts?company_name=HayArt
```
#####	 get contact information for index page:
```
			curl -X GET http://127.0.0.1:8081/index
```
#####	 get contact information for about_us page:
```
			curl -X GET http://127.0.0.1:8081/about_us
```
