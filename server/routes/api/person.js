var keystone = require('keystone');

/**
 * List person
 */

// Getting our person model
var Person = keystone.list('Person');
// Creating the API end point
exports.list = function (req, res) {
	const options = {
		page: req.query.page || 1,
		limit: 20,
		lean: true,
	};
	Person.model.paginate({},options, (err, item) => {
		if(err) return res.apiError('database error', err);
		if(!item) return res.apiError('not found')
		res.apiResponse(item)
	})
	//
	// Person.model.paginate({},options).then(item => {
	// 	res.json(item)
	// })




	// Person.model.find().populate('children parent partner').limit(Number(req.query.limit)).exec((err, item) => {
		// if(err) return res.apiError('database error', err);
		// if(!item) return res.apiError('not found')
		// res.apiResponse({
		// 	people: item
		// })
	// })
};

exports.search = (req, res) => {
	Person.model.fuzzySearch(req.query.name).lean().exec((err, item) => {
		if(err) return res.apiError('database error', err);
		if(!item) return res.apiError('not found')
		res.apiResponse({
			people: item
		})
	})
}

exports.getPerson = (req, res) => {
	Person.model.findById(req.params.id).populate('children parent partner').lean().exec((err, item) => {
		if(err) return res.apiError('database error', err);
		if(!item) return res.apiError('not found')
		res.apiResponse({
			person: item
		})
	})
}

exports.getChildren = (req, res) => {
	Person.model.find().where("parent", req.params.id).exec((err, item) => {
		if(err) return res.apiError('database error', err);
		if(!item) return res.apiError('not found')
		res.apiResponse({
			people: item
		})
	})
}
