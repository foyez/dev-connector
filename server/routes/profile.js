const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profile');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', profileController.profile);

module.exports = router;
