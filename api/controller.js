const db = require('../config/database');
const crypto = require('crypto');

// Display home page
exports.index = function(req, res){
	res.send('<h1 style="padding:50px;text-align:center;">Hello, There!!!</h1>');
}


/**
 * saveUser() will add the user
 * information along with basic
 * validation of posted inputs
 * @param req
 * @param res
 * @return json
 */
exports.saveUser = function(req, res){

	const data = req.body;
	const postedInputLabels = Object.keys(data);

	if (postedInputLabels.indexOf('name') === -1){
		return res.status(500).json({
			ErrorMessage: 'Name field is required'
		});
	}

	if (postedInputLabels.indexOf('email') === -1){
		return res.status(500).json({
			ErrorMessage: 'Email field is required'
		});
	}
	else{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(data.email) === false){
			return res.status(500).json({
				ErrorMessage: 'Invalid email address'
			});
		}
	}

	if (postedInputLabels.indexOf('password') === -1){
		return res.status(500).json({
			ErrorMessage: 'Password field is required'
		});
	}

	var hashPassword = crypto.createHmac('sha256', 'veltestkey').update(data.password).digest("hex");
	var createdAt = new Date().toISOString();

	db.query("INSERT INTO users (name, email, password, created_at) VALUES ("
		+ db.esc(data.name) 
		+","
		+ db.esc(data.email) 
		+","
		+ db.esc(hashPassword) 
		+","
		+ db.esc(createdAt) 
		+")", function(err, results, fields){

			if (err){
				console.log(`DB ERROR [${err.code}]: ${err.sqlMessage}!\nSQL Query: ${err.sql}`)
				return res.status(500).send(err);
			}

			res.json({Message: "Successfully added the user information"});
		});
}

/**
 * generateToken will generate a token
 * and also having expiry time for that token
 * @param req
 * @param res
 * @return json
 */
exports.generateToken = function(req, res){
	var date 			= new Date();
	var token 		= crypto.createHash('sha256').update(date.toISOString()).digest('hex');
	var createdAt = date.toISOString();
	var expiryAt 	= new Date(date.getTime() + 20 * 60000).toISOString(); // 20 mins
	db.query("INSERT INTO auth_tokens (token, expiry_at, created_at) VALUES (" +
		db.esc(token) + "," + db.esc(expiryAt) + "," + db.esc(createdAt) + ")", function(err, result, fields){

			if (err){
				console.log(`DB ERROR [${err.code}]: ${err.sqlMessage}!\nSQL Query: ${err.sql}`)
				return res.status(500).send(err);
			}

			res.json({token: token});

		});
}