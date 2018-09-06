const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rent = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    formated: {
      type: String,
      require: true,
    },
    lat: String,
    lng: String
  },
  rentType: {
    type: String,
    default: 'House'
  },
  built: {
    type: Number,
    default: null
  },
  repair: {
    type: Number,
    default: null
  },
  totalArea: {
    type: Number,
    default: 0
  },
  kitchenArea: {
    type: Number,
    default: 0
  },
  rooms: {
    type: Number,
    default: 0
  },
  baths: {
    type: Number,
    default: 0
  },
  beds: {
    type: Number,
    default: 0
  },
  floor: {
    type: Number,
    default: 1
  },
  totalFloors: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: true
  },
  additionalPayments: {
    type: String,
    default: null
  },
  paymentsSummer: {
    type: Number,
    default: 0
  },
  paymentsWinter: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: null
  },
  imgs: {
    type: [String],
    default: []
  },
  available: {
    type: Schema.Types.Mixed
  },
  rentTerm: {
    type: String,
    default: null
  },
  heating: {
    type: String,
    default: null
  },
  appliances: {
    type: [String],
    default: []
  },
  furniture: {
    type: [String],
    default: []
  },
  additionalEquipment: {
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
