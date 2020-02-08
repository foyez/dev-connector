const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', usersController.users);

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', usersController.register);

// @route   POST api/users/login
// @desc    Login user & return JWT token
// @access  Public
router.post('/login', usersController.login);

module.exports = router;
