const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();
	// lấy các person
	keystoneApp.get('/api/people', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model.find()
		.populate('children parent partner')
		.limit(Number(req.query.limit))
		.exec((err, results) => {
			if (err) throw err;
			res.json(results);
		})
	});

	// lấy con cái
	keystoneApp.get('/api/children/:id', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model.find().where("parent", req.params.id).exec((err, results) => {
			if (err) throw err;
			res.json(results);
		})
	});

	keystoneApp.get('/api/person/:slug', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model
		.findOne({slug: req.params.slug})
		.populate('children parent partner')
		.exec(function (err, results) {
			if (err) throw err;
			res.json(results);
		});
	});

	keystoneApp.get('/api/person-id/:id', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model
		.findById(req.params.id)
		.populate('children parent partner')
		.exec(function (err, results) {
			if (err) throw err;
			res.json(results);
		});
	});

	keystoneApp.get('/api/branch/:branch', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model
			.find()
			.populate('children parent partner')
			.where('branch').equals(req.params.branch)
			.sort('-generation')
			.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
			});
	});

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
