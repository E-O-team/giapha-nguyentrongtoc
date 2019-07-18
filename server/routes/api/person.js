var keystone = require('keystone');

/**
 * List person
 */

// Getting our person model
var Person = keystone.list('Person');
// Creating the API end point
exports.list = function (req, res) {
	Person.model.find().select('fullName sex image').limit(Number(req.query.limit)).exec((err, item) => {
		if(err) return res.apiError('database error', err);
		if(!item) return res.apiError('not found')
		res.apiResponse({
			people: item
		})
	})
};

exports.getPerson = (req, res) => {
	Person.model.findById(req.params.id).populate('children').exec((err, item) => {
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
