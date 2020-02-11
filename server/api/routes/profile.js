const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers/profile');

// @route   GET api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), profileController.getProfile);

// @route   POST api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', profileController.getProfiles);

// @route   POST api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get('/handle/:handle', profileController.getProfileByHandle);

// @route   POST api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Public
router.get('/user/:user_id', profileController.getProfileByUserId);

// @route   POST api/profile
// @desc    create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), profileController.createProfile);

module.exports = router;
