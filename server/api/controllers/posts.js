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
