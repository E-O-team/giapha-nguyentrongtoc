var keystone = require('keystone');

/**
 * List person
 */

// Getting our person model
var Person = keystone.list('Person');
// Creating the API end point
exports.list = function (req, res) {
	// // Querying the data this works similarly to the Mongo db.collection.find() method
	// Person.model.find(function (err, items) {
	// 	// Make sure we are handling errors
	// 	if (err) return res.apiError('database error', err);
	// 	res.apiResponse({
	// 		// Filter person by
	// 		people: items,
	// 	});
	//
	// 	// Using express req.query we can limit the number of people returned by setting a limit property in the link
	// 	// This is handy if we want to speed up loading times once our person collection grows
	// }).limit(Number(req.query.limit));

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
