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

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  private
router.post('/like/:post_id', passport.authenticate('jwt', { session: false }), postsController.likePostById);

// @route   POST api/posts/unlike/:post_id
// @desc    Unlike post
// @access  private
router.post('/unlike/:post_id', passport.authenticate('jwt', { session: false }), postsController.unlikePostById);

// @route   POST api/posts/comment/:post_id
// @desc    Add comment to post
// @access  private
router.post('/comment/:post_id', passport.authenticate('jwt', { session: false }), postsController.addComment);

// @route   DELETE api/posts/comment/:post_id/:comment_id
// @desc    Delete comment from post
// @access  private
router.delete(
	'/comment/:post_id/:comment_id',
	passport.authenticate('jwt', { session: false }),
	postsController.deleteComment
);

module.exports = router;
