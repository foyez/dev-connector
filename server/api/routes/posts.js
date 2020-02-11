const express = require('express');
const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers/posts');

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', postsController.getPosts);

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', postsController.getPostById);

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), postsController.createPost);

// @route   DELETE api/posts/:id
// @desc    Delete post by id
// @access  private
router.delete('/:id', passport.authenticate('jwt', { session: false }), postsController.deletePostById);

module.exports = router;
