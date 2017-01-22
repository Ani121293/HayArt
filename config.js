var express = require('express');
var path = require('path');
var appDir = path.dirname(require.main.filename);
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(express.static('WebContent'));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.set('view engine', 'ejs');
    app.set('views', appDir+ '/WebContent/view/');
    app.engine('html', require('ejs').renderFile);
    return app;
};

