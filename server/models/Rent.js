const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rent = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bath: {
    type: Number,
    default: 0
  },
  beds: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  imgs: {
    type: [String],
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Rent', Rent);
