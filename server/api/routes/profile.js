const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers/profile');

// @route   GET api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), profileController.getProfile);

// @route   POST api/profile
// @desc    create user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), profileController.createProfile);

module.exports = router;
