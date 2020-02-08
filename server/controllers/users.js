const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.users = (req, res) => {
	res.status(200).json({ msg: 'Users Works' });
};

// REGISTER
exports.register = async (req, res) => {
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
		return res.status(400).json({ email: 'Email already exists.' });
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
				const user = await newUser.save();
				res.json(user);
			} catch (error) {
				console.log(error);
			}
		});
	});
};

// LOGIN
exports.login = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	try {
		// find user by email
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ email: 'User is not found.' });
		}

		// Check Password
		const isMatch = await bcrypt.compare(password, user.password);

		if (isMatch) {
			const payload = { id: user._id, name: user.name, avatar: user.avatar };

			// Sign Token
			jwt.sign(payload, config.secretorKey, { expiresIn: 3600 }, (error, token) => {
				res.json({
					success: true,
					token: `Bearer ${token}`
				});
			});
		} else {
			return res.status(400).json({ password: 'Password is incorrect.' });
		}
	} catch (error) {
		console.log(error);
	}
};
