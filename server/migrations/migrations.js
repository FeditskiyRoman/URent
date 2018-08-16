'use strict';

const mongoose = require('mongoose');

const migrator = require('./migrator.js');
var Settings = mongoose.model('Settings');;

module.exports = cb => {
  const migrationOptions = {
    setDbVersion: setDbVersion,
    getDbVersion: getDbVersion,
    migrations: [
      require('./scripts/v001.js'),
      require('./scripts/v002.js'),
      require('./scripts/v003.js')
    ],
    done: cb
  };

  migrator(migrationOptions);
};

function setDbVersion(v, cb) {
  Settings.findOneAndUpdate({
      name: 'version'
    }, {
      name: 'version',
      value: v
    }, {
      upsert: true
    },
    function (res) {
      const v = res && res.version;
      cb(v);
    }
  );
}

function getDbVersion(cb) {
  Settings.findOne({
    name: 'version'
  }, function (err, res) {
    const v = res && res.value;
    cb(v);
  });
}