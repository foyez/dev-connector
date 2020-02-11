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

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), profileController.addExperience);

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
router.post('/education', passport.authenticate('jwt', { session: false }), profileController.addEducation);

// @route   DELETE api/profile
// @desc    Delete user profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), profileController.deleteProfile);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
	'/experience/:exp_id',
	passport.authenticate('jwt', { session: false }),
	profileController.deleteExperience
);

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
	'/education/:edu_id',
	passport.authenticate('jwt', { session: false }),
	profileController.deleteEducation
);

module.exports = router;
