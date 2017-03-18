var express = require('express');
var path = require('path');
var appDir = path.dirname(require.main.filename);
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(express.static('WebContent'));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
	app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

    app.set('view engine', 'ejs');
    app.set('views', appDir+ '/WebContent/view/');
    app.engine('html', require('ejs').renderFile);
    


	return app;
};

