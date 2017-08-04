const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/database');
const routes = require('./api/routes');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// setup database
db.connect();

// Parse when Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

// Parse when Content-Type: application/json
app.use(bodyParser.json());

// setup routes
routes(app);

// Don't crash the application even
// if the error occurred coz
// error handling will be in log file
process.on('uncaughtException', function (err) {
  console.error(err); // for just printing in the console
  console.log("Application still running...");
});

// Close the DB connection when pressing Ctrl+C
process.on('SIGINT', () => {
  db.disconnect();
  process.exit(1);
});

// App listening
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
