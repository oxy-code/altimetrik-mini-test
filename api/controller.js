const db = require('../config/database');

// Display home page
exports.index = function(req, res){
	res.send('<h1 style="padding:50px;text-align:center;">Hello, There!!!</h1>');
}

// Save User Record
exports.saveUser = function(req, res){
	console.log(req.body)
	res.end();
}