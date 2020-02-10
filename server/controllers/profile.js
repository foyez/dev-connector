const Profile = require('../models/Profile');
const User = require('../models/User');
const validateProfileInput = require('../validation/profile');

// CURRENT PROFILE
exports.getProfile = async (req, res) => {
	const errors = {};

	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'name', 'avatar' ]);

		if (!profile) {
			errors.profile = 'There is no profile for this user';
			return res.status(404).json(errors);
		}

		res.status(200).json(profile);
	} catch (error) {
		console.log(error);
	}
};

// CREATE OR EDIT PROFILE
exports.createProfile = async (req, res) => {
	const { errors, isValid } = validateProfileInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	// GET FIELDS
	const profileFields = {};
	profileFields.user = req.user.id;

	if (req.body.handle) profileFields.handle = req.body.handle;
	if (req.body.company) profileFields.company = req.body.company;
	if (req.body.website) profileFields.website = req.body.website;
	if (req.body.location) profileFields.location = req.body.location;
	if (req.body.bio) profileFields.bio = req.body.bio;
	if (req.body.status) profileFields.status = req.body.status;
	if (req.body.githubUserName) profileFields.githubUserName = req.body.githubUserName;

	// SKILLS - SPLIT INTO ARRAY
	if (typeof req.body.skills !== 'undefined') profileFields.skills = req.body.skills.split(',');

	// SOCIAL
	profileFields.social = {};
	if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
	if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
	if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
	if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
	if (req.body.twitter) profileFields.social.twitter = req.body.twitter;

	try {
		const profile = await Profile.findOne({ user: req.user.id });

		if (profile) {
			// Update
			const updatedProfile = await Profile.findOneAndUpdate(
				{ user: req.user.id },
				{ $set: profileFields },
				{ new: true }
			);
			res.json(updatedProfile);
		} else {
			// Create

			// Check if handle exists
			const profileFromHandle = await Profile.findOne({ handle: profileFields.handle });

			if (profileFromHandle) {
				errors.handle = 'That handle already exists.';
				return res.status(400).json(errors);
			}

			// Save profile
			const createdProfile = await new Profile(profileFields).save();
			res.json(createdProfile);
		}
	} catch (error) {
		console.log(error);
	}
};
