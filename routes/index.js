const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();
	// lấy các bài post
	keystoneApp.get('/api/people', (req, res, next) => {
		const Person = keystone.list('Person');
		Person.model.find().populate('children parent partner').limit(Number(req.query.limit)).exec((err, item) => {
			if(err) return res.apiError('database error', err);
			if(!item) return res.apiError('not found')
			res.apiResponse({
				people: item
			})
		})
	});


	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
