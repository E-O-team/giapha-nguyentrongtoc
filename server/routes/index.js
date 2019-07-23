// We will need to require Keystone first
var keystone = require('keystone');
var cors = require('cors')
// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
	api: importRoutes('./api'),
};

// Export our app routes
exports = module.exports = function (app) {
	app.use(cors())

	// Get access to the API route in our app
    // console.log(routes.api);
	app.get('/api/people/', keystone.middleware.api, routes.api.person.list);
	app.get('/api/person/:id', keystone.middleware.api, routes.api.person.getPerson)
	app.get('/api/person/children/:id', keystone.middleware.api, routes.api.person.getChildren)
	app.get('/', function (req, res) {
		// Render some simple boilerplate html
		function renderFullPage () {
			// Note the div class name here, we will use that as a hook for our React code
			return `
		<!doctype html>
		<html>
			<head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<title>Gia Phả Phạm Phú</title>
				<style type="text/css">
					html ,body, .viewport{
						margin: 0;
						height: 100%;
						width: 100%;
					}
				</style>
			</head>
			<body>
				<div class="react-container"></div>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;
		}
		// Send the html boilerplate
		res.send(renderFullPage());
	});
};
