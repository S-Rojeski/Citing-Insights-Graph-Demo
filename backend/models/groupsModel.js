var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var groupsSchema = new Schema({
	'creator' : {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	'name' : String,
	'note' : String,
	'members' : [{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}],
	'pendingMembers': [{
		email:String,
		message: String,
		name: String
	}]
});

module.exports = mongoose.model('groups', groupsSchema);
