const passport = require('passport/lib');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.register = (req, res) => {
  if (!req.body.first_name || !req.body.email || !req.body.password || !req.body.role) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  const user = new User();

  // TODO: add role search by req.body.role and put roles id to the user.role

  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(err => {
    if (err) {
      res.status(500);
      res.send({
        error: err
      });
    } else {
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    }
  });
};

module.exports.login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  User.findOne({
    email: req.body.email
  }).exec((err, result) => {
    passport.authenticate('local', (err, user, info) => {
      var token;

      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }

      // If a user is found
      if (user) {
        // If a user is deleted
        if (user.deleted) {
          sendJSONresponse(res, 400, {
            "message": "User deleted"
          });
          return;
        }

        token = user.generateJwt();
        res.status(200);
        res.json({
          "token": token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  });
};