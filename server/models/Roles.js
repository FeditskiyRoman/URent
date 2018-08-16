const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Roles = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Roles', Roles);