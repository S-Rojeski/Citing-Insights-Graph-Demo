/*const modelMap = new Map();
modelMap.set('assignment', require('./assignmentModel'));
modelMap.set('citation', require('./citationModel'));
modelMap.set('configuration', require('./configurationsModel'));
modelMap.set('course', require('./courseModel'));
modelMap.set('feedback', require('./feedbackModel'));
modelMap.set('group', require('./groupsModel'));
modelMap.set('paper', require('./paperModel'));
modelMap.set('rubric', require('./rubricModel'));
modelMap.set('user', require('./userModel'));*/
exports.assignmentModel = require('./assignmentModel');
exports.citationModel = require('./citationModel');
exports.configurationsModel = require('./configurationsModel');
exports.courseModel = require('./courseModel');
exports.feedbackModel = require('./feedbackModel');
exports.groupsModel = require('./groupsModel');
exports.paperModel = require('./paperModel');
exports.rubricModel = require('./rubricModel');
exports.userModel = require('./userModel');