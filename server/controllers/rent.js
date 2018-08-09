var mongoose = require('mongoose');
var Rent = mongoose.model('Rent');
var User = mongoose.model('User');
var formidable = require('formidable');

module.exports.getAll = (req, res) => {
  Rent.count().exec((err, count) => {
    Rent.find().limit(req.params.limit).skip(req.params.page * req.params.limit - req.params.limit).sort({'updated_at': -1})
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
  // console.log(req);
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
