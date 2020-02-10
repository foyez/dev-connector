const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', postsController.posts);

module.exports = router;
