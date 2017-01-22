var logger = require('./log.js');
var express = require('express');
var app = express();
var config = require('./config');
var controller = require('./controller');
var router = require('./router');
var db = require('./db');

app = config(app);
app = router(app);

var server = app.listen(8081,'127.0.0.1', function (err) {
   if (err) {logger.error('Unable to start the server!!!');
       logger.error('Unable to start the server!!!');
   }
   var host = server.address().address;
   var port = server.address().port;
   logger.info('HayArt is listening at http://' + host + ':' + port);
})
