const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  date: {type: String, required: true},
  hour: {type: String, required: true},
  block: {type: String, required: true},
  color: {type: String, required: true}
});

module.exports = mongoose.model('Block', blockSchema);