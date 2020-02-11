const express = require('express');
const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers/posts');

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), postsController.createPost);

module.exports = router;
