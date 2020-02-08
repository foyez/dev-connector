const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

exports.users = (req, res) => {
	res.status(200).json({ msg: 'Users Works' });
};

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
