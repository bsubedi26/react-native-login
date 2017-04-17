const Model = require('../../lib/Model');
const requestSchema  = require('./schema');

class RequestModel extends Model {}

module.exports = new RequestModel(requestSchema);
