'use strict';
const mongoose = require('mongoose');
const Roles = mongoose.model('Roles');

module.exports = {
  version: 3,
  message: 'Add renter role',
  script: next => {
    const role = new Roles();

    role.name = "renter";

    role.save(
      function (err) {
        if (!err) {
          next();
        }
      }
    );
  }
};