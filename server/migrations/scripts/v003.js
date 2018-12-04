'use strict';
const mongoose = require('mongoose');
const Roles = mongoose.model('Roles');

module.exports = {
  version: 3,
  message: 'Add landlord and tenan role',
  script: next => {
    const landlord = new Roles();
    const tenan = new Roles();

    landlord.name = "landlord";
    tenan.name = "tenan";

    landlord.save(
      function (err) {
        if (!err) {
          tenan.save(
            function (err) {
              if (!err) {
                next();
              }
            }
          );
        }
      }
    );
  }
};