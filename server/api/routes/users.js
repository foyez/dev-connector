const express = require('express');
const passport = require('passport');
const router = express.Router();

const usersController = require('../controllers/users');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', usersController.register);

// @route   POST api/users/login
// @desc    Login user & return JWT token
// @access  Public
router.post('/login', usersController.login);

// @route   GET api/users/current
// @desc    return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), usersController.currentUser);

module.exports = router;
