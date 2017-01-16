var logger = require('./log.js');
var express = require('express');
var app = express();
var config = require('./config');
var controller = require('./controller');
var router = require('./router');
app = config(app)
app = router(app)	
//router
// app.get('/index', controller.getIndex);
// app.get('/products', controller.getProducts);
// app.get('/details', controller.getDetails);
// app.get('/contacts', controller.getContacts);
// app.get('/about_us', controller.getAboutUs);

var server = app.listen(8081,'127.0.0.1', function (err) {
    if(err){
	 logger.error('Couldn\'t start the server!!!')
   }
   var host = server.address().address
   var port = server.address().port
   logger.info("HayArt is listening at http://" + host + ":" + port)
})
