const Post = require('../models/Post');

const validatePostInput = require('../../validation/post');

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
