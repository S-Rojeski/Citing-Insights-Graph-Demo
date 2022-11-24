var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paperSchema = new Schema({
	'title': String,
	'name': String,
	'body': {},
	'pdf': Buffer,
	'assignment' : {
		type: Schema.Types.ObjectId,
		ref: 'assignment'
	},
	'course' : {
		type: Schema.Types.ObjectId,
		ref: 'course'
	}
});

module.exports = mongoose.model('paper', paperSchema);
