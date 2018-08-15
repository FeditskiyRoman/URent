const express = require('express');
const Models = require('./models/Models');
const crypto = require('crypto');
const jwt = require('express-jwt/lib');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlProfile = require('./controllers/profile');
const ctrlAuth = require('./controllers/authentication');
const ctrlRent = require('./controllers/rent');

const router = express.Router(); /** Initializing Routes instance **/

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// profile info
router.get('/api/profile', auth, ctrlProfile.profileRead);

// profile update
router.put('/api/update', auth, ctrlProfile.profileUpdate);

// profile update Password
router.put('/api/password', auth, ctrlProfile.updatePassword);

// profile deleteUser
router.delete('/api/delete', auth, ctrlProfile.deleteUser);

// login-register authentication
router.post('/api/register', ctrlAuth.register);
router.post('/api/login', ctrlAuth.login);

// rent
router.get('/api/rents/:page/:limit', auth, ctrlRent.getAll);
router.get('/api/rent/:id', auth, ctrlRent.get);
router.post('/api/rent', auth, ctrlRent.create);

// files
router.post('/api/files', auth, ctrlRent.files);
router.get('/api/file/:name', ctrlRent.getFile);

module.exports = router;
