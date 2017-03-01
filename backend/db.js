var mongoose = require('mongoose');
var logger = require('./log');

var db_host = '127.0.0.1';
var db_port = '27017';
mongoose.connect('mongodb://127.0.0.1:27017/HayArt', function(err,db){
    if(err){
        logger.info('Unable to connect to db');
    } else {
        logger.info('Connected to the database !!!!!');
    }
});
