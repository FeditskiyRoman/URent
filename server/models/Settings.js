// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const path = require('path');

// const Settings = new mongoose.Schema({
//   name: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   value: String,
//   created: {
//     type: Date,
//     default: Date.now
//   }
// });

// let model = mongoose.model(path.basename(module.filename, '.js'), Settings);

// Settings.methods.get = cb => model.find({}, cb);
// Settings.methods.getByName = (name, cb) => model.find({
//   name: name
// }, cb);
// Settings.methods.update = (setting, cb) => model.findOneAndUpdate({
//     name: setting.name
//   },
//   setting, {
//     upsert: true
//   },
//   cb
// );

// mongoose.model('Settings', Settings);

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Settings = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  value: String,
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Settings', Settings);