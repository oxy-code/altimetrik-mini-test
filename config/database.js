const mysql = require('mysql');

// Constructor
// Which initialize the DB connection
function DB(){

	this.host = 'localhost';
	this.user = 'root';
	this.pass = '';
	this.db 	= 'altimetrik-db';

	// mysql connection creator
	this.conn = mysql.createConnection({
		host: this.host,
		user: this.user,
		password: this.pass,
		database: this.db
	});

}

DB.prototype.connect = function(){
	this.conn.connect(errHandler);
}

DB.prototype.disconnect = function(){
	this.conn.end();
}

// To execute SQL queries
DB.prototype.query = function(sql, cb){
	this.conn.query(sql, cb);
}


// DB connection error handler
function errHandler(err){
	if (err){
		console.log(`DB ERROR [${err.code}]: ${err.sqlMessage}`)
		process.exit();
	}
	else{
		console.log('DB connected successfully\n');
	}
}

// Singleton design pattern
// to keep same instance for multiple calls
module.exports = exports = new DB();

