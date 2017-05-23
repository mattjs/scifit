var express = require('express');
var router = express.Router();

var login = require('./login');
var register = require('./register');
var logout = require('./logout');
var dashboard = require('./dashboard');
var dasherror = require('./dasherror');
var home = require('./home');

router.use('/login', login);
router.use('/', home);
router.use('/register', register);
router.use('/logout', logout);
router.use('/dashboard', dashboard);
router.use('/dasherror', dasherror);

module.exports = router;
