const keystone = require('keystone');
var enforce = require('express-sslify');
var cors = require('cors')
// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {
	keystoneApp.use(enforce.HTTPS({ trustProtoHeader: true }))
	keystoneApp.use(cors())

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
		.populate('parent partner children', '_id fullName sex birth death generation branch partner parent children information image', null, {sort: "createdAt"})
		// .populate('parent partner children', ['fullName', 'sex', 'birth', 'death', 'generation', 'branch', 'partner', 'parent', 'children', 'information', 'image'], null, {sort: "createdAt"})

		// .populate('parent partner children', {sort: "createdAt"})
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
		// .populate('parent partner children', null, {sort: "createdAt"})
		// .populate({
		// 	path:
		// })
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
