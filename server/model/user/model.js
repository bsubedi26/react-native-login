const Model = require('../../lib/Model');
const Schema  = require('./schema');

class UserModel extends Model {}

module.exports = new UserModel(Schema);
