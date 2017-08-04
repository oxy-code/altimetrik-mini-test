const controller = require('./controller');


function routes(app){

	app.get('/api/token', controller.generateToken);
	app.post('/api/users', controller.saveUser);
	app.get('/', controller.index);

	app.use(function (err, req, res, next) {
		console.error(err.stack);
		res.status(500).send('<h1 align="center">Something broken!</h1>')
	})

}

module.exports = routes;