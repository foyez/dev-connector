const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../../config/config');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// REGISTER
exports.register = async (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;
	const avatar = gravatar.url(email, {
		s: '200', // size
		r: 'pg', // rating
		d: 'mm' // default
	});

	const user = await User.findOne({ email });

	if (user) {
		errors.email = 'Email already exists.';
		return res.status(409).json(errors);
	}

	const newUser = new User({
		name,
		email,
		avatar,
		password
	});

	bcrypt.genSalt(10, (err, salt) => {
		if (err) throw err;

		bcrypt.hash(newUser.password, salt, async (err, hash) => {
			if (err) throw err;

			try {
				newUser.password = hash;
				const updatedUser = await newUser.save();
				res.json(updatedUser);
			} catch (error) {
				console.log(error);
			}
		});
	});
};

// LOGIN
exports.login = async (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	try {
		// find user by email
		const user = await User.findOne({ email });

		if (!user) {
			errors.email = 'User is not found.';
			return res.status(404).json(errors);
		}

		// Check Password
		const isMatch = await bcrypt.compare(password, user.password);

		if (isMatch) {
			const payload = { id: user._id, name: user.name, avatar: user.avatar };

			// Sign Token
			jwt.sign(payload, config.secretOrKey, { expiresIn: '1h' }, (error, token) => {
				res.json({
					success: true,
					token: `Bearer ${token}`
				});
			});
		} else {
			errors.password = 'Password is incorrect.';
			return res.status(400).json(errors);
		}
	} catch (error) {
		console.log(error);
	}
};

// CURRENT USER
exports.currentUser = (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	});
};
