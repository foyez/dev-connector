const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

// @route   GET api/users/test
// @desc    Tests user route
// @access  Private
router.get('/test', usersController.users);

module.exports = router;
