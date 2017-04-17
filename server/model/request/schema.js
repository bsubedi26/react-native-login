const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const requestSchema = new Schema({
  type: { type: String, required: true },
  path: { type: String, required: true},
  headers: { type: Object, required: true},
  body:  { type: Object }
});

module.exports = mongoose.model('Request', requestSchema);