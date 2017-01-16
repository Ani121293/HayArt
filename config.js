var express = require('express')
var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function(app) {
	app.use(express.static('WebContent'));
	app.set('view engine', 'ejs');
	app.set('views', appDir+ "/WebContent/view/");
	app.engine('html', require('ejs').renderFile);
	return app;
};
  
