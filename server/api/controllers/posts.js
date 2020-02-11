const Post = require('../models/Post');
const Profile = require('../models/Profile');

const validatePostInput = require('../../validation/post');

// GET ALL POSTS
exports.getPosts = async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 });
		res.json(posts);
	} catch (error) {
		res.status(404).json({ noPostsFound: 'No posts found' });
	}
};

// GET POST BY ID
exports.getPostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found with that ID' });
	}
};

// CREATE POST
exports.createPost = async (req, res) => {
	const { errors, isValid } = validatePostInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const newPost = new Post({
		text: req.body.text,
		name: req.body.name,
		avatar: req.body.avatar,
		user: req.user.id
	});
	const post = await newPost.save();
	res.status(201).json(post);
};

// DELETE POST BY ID
exports.deletePostById = async (req, res) => {
	try {
		// const profile = await Profile.findOne({ user: req.user.id });
		const post = await Post.findById(req.params.id);

		// Check for post owner
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ notAuthorized: 'User not authorized' });
		}

		// Delete
		await post.remove();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found' });
	}
};

// LIKE POST BY ID
exports.likePostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (post.likes.filter((like) => like.user.toString() === req.user.id).length > 0) {
			return res.status(400).json({ alreadyLiked: 'User already liked this post' });
		}

		post.likes.push({ user: req.user.id });
		const updatedPost = await post.save();
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found' });
	}
};

// UNLIKE POST BY ID
exports.unlikePostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (post.likes.filter((like) => like.user.toString() === req.user.id).length === 0) {
			return res.status(400).json({ notLiked: 'You have not liked this post yet' });
		}

		// Get remove index
		const removeIndex = post.likes.map((item) => item.user.toString()).indexOf(req.user.id);

		// Splice out of array
		post.likes.splice(removeIndex, 1);

		// Save
		const updatedPost = await post.save();
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found' });
	}
};

// ADD COMMENT TO POST
exports.addComment = async (req, res) => {
	const { errors, isValid } = validatePostInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	try {
		const post = await Post.findById(req.params.post_id);
		const newComment = {
			text: req.body.text,
			name: req.body.name,
			avatar: req.body.avatar,
			user: req.user.id
		};

		// Add to comments array
		post.comments.unshift(newComment);

		// Save
		const updatedPost = await post.save();
		res.status(201).json(updatedPost);
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found' });
	}
};

// DELETE COMMENT FROM POST
exports.deleteComment = async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		// Check if comment exists
		if (post.comments.filter((comment) => comment._id.toString() === req.params.comment_id).length === 0) {
			return res.status(404).json({ commentNotExists: "Comment doesn't exists" });
		}

		// Get remove index
		const removeIndex = post.comments.map((item) => item._id.toString()).indexOf(req.params.comment_id);

		// Splice comment out of array
		post.comments.splice(removeIndex, 1);

		const updatedPost = await post.save();
		res.status(200).json(updatedPost);
	} catch (error) {
		res.status(404).json({ noPostFound: 'No post found' });
	}
};
