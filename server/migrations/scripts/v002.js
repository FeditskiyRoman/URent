'use strict';
const mongoose = require('mongoose');
const Roles = mongoose.model('Roles');

module.exports = {
  version: 2,
  message: 'Add admin role',
  script: next => {
    const role = new Roles();

    role.name = "admin";

    role.save(
      function (err) {
        if (!err) {
          next();
        }
      }
    );
  }
};