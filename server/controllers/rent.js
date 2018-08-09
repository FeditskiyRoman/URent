const mongoose = require('mongoose');
const multer = require('multer');
const Rent = mongoose.model('Rent');
const User = mongoose.model('User');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../upload')
  },
  filename: function (req, file, cb) {
    cb(null, generateFileName(file));
  }
});

const upload = multer({
  storage: storage
}).array('file');

function generateFileName(file) {
  const fileFormat = (file.originalname).split('.');

  return fileFormat[0] + '-' + (Date.now() + '').slice(0, '-5') + '.' + fileFormat[fileFormat.length - 1]
}

function uploadFiles(req, res) {
  return new Promise((resolve, reject) => {
    upload(req, res, err => {
      if (err) {
        console.log(err);
        reject(err);
      }

      const respArr = [];
      req.files.forEach(file => {
        respArr.push(file.filename);
      });

      resolve(respArr);
    })
  });
}

module.exports.getAll = (req, res) => {
  Rent.count().exec((err, count) => {
    Rent.find().limit(req.params.limit).skip(req.params.page * req.params.limit - req.params.limit).sort({
        'updated_at': -1
      })
      .exec((err, rent) => {
        res.json({
          rent: rent,
          count: count
        });
      })
  });
};

module.exports.create = (req, res) => {
  let rent = Object.assign(new Rent(), req.body, {
    user_id: req.payload._id
  });

  rent.save(function (err, rentResp) {
    if (err) {
      res.status(500).send({
        error: err
      });
    } else {
      User.findOne({
        _id: req.payload._id
      }, (err, user) => {
        if (err) {
          res.status(500).send({
            error: err
          });
        } else {
          const userRents = user.rents || [];
          userRents.push(rentResp._id);

          User.update({
            _id: req.payload._id
          }, {
            rents: userRents
          }).exec().then((r) => {
            res.status(200).send(rentResp);
          }).catch(err => res.status(500).send({
            error: err
          }));
        }
      });
    }
  });
};

module.exports.files = (req, res) => {
  return uploadFiles(req, res).then(img => {
    res.json(img);
  }).catch(err => res.status(500).send({
    error: err
  }));
}

module.exports.getFile = (req, res) => {
  var options = {
    root: __dirname + '/../upload/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports.update = (req, res) => {
  Rent
    .update({
        _id: req.payload._id
      },
      req.body).exec((err, user) => {
      err ? res.status(400).json(err) : res.status(200).json(user);
    });
};

module.exports.delete = (req, res) => {
  Rent
    .update({
      _id: req.payload._id
    }, {
      deleted: true
    }).exec((err, user) => {
      err ? res.status(400).json(err) : res.status(200).json(user);
    });
};