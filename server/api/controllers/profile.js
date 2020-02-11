const Profile = require('../models/Profile');
const User = require('../models/User');

const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');

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

// GET ALL PROFILES
exports.getProfiles = async (req, res) => {
	const errors = {};

	try {
		const profiles = await Profile.find().populate('user', [ 'name', 'avatar' ]);

		if (!profiles) {
			errors.profile = 'There are no profiles';
			return res.status(404).json(errors);
		}

		res.status(200).json(profiles);
	} catch (error) {
		errors.profile = 'There are no profiles';
		res.status(404).json(errors);
	}
};

// GET PROFILE BY HANDLE
exports.getProfileByHandle = async (req, res) => {
	const errors = {};

	try {
		const profile = await Profile.findOne({ handle: req.params.handle }).populate('user', [ 'name', 'avatar' ]);

		if (!profile) {
			errors.profile = 'There is no profile for this user';
			return res.status(404).json(errors);
		}

		res.status(200).json(profile);
	} catch (error) {
		res.status(400).json(error);
	}
};

// GET PROFILE BY USER ID
exports.getProfileByUserId = async (req, res) => {
	const errors = {};

	try {
		const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', [ 'name', 'avatar' ]);

		if (!profile) {
			errors.profile = 'There is no profile for this user';
			return res.status(404).json(errors);
		}

		res.status(200).json(profile);
	} catch (error) {
		errors.profile = 'There is no profile for this user';
		res.status(404).json(errors);
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
			res.status(201).json(createdProfile);
		}
	} catch (error) {
		console.log(error);
	}
};

// ADD EXPERIENCE TO PROFILE
exports.addExperience = async (req, res) => {
	const { errors, isValid } = validateExperienceInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	try {
		const profile = await Profile.findOne({ user: req.user.id });

		if (!profile) {
			errors.profile = 'There is no profile by this id.';
			return res.status(404).json(errors);
		}

		const newExp = {
			title: req.body.title,
			company: req.body.company,
			location: req.body.location,
			from: req.body.from,
			to: req.body.to,
			current: req.body.current,
			description: req.body.description
		};

		// Add experience to array
		profile.experience.unshift(newExp);

		const updatedProfile = await profile.save();
		res.status(200).json(updatedProfile);
	} catch (error) {
		console.log(error);
	}
};

// ADD EDUCATION TO PROFILE
exports.addEducation = async (req, res) => {
	const { errors, isValid } = validateEducationInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	try {
		const profile = await Profile.findOne({ user: req.user.id });

		if (!profile) {
			errors.profile = 'There is no profile by this id.';
			return res.status(404).json(errors);
		}

		const newEducation = {
			school: req.body.school,
			degree: req.body.degree,
			fieldOfStudy: req.body.fieldOfStudy,
			from: req.body.from,
			to: req.body.to,
			current: req.body.current,
			description: req.body.description
		};

		// Add education to array
		profile.education.unshift(newEducation);

		const updatedProfile = await profile.save();
		res.status(201).json(updatedProfile);
	} catch (error) {
		console.log(error);
	}
};

// DELETE USER PROFILE
exports.deleteProfile = async (req, res) => {
	try {
		await Profile.findOneAndRemove({ user: req.user.id });
		await User.findOneAndRemove({ _id: req.user.id });
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
	}
};

// DELETE EXPERIENCE FROM PROFILE
exports.deleteExperience = async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get remove index
		const removeIndex = profile.experience.map((item) => item.id).indexOf(req.params.exp_id);

		// Splice out of array
		profile.experience.splice(removeIndex, 1);

		// Save
		const updatedProfile = await profile.save();
		res.status(200).json(updatedProfile);
	} catch (error) {
		console.log(error);
	}
};

// DELETE EDUCATION FROM PROFILE
exports.deleteEducation = async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get remove index
		const removeIndex = profile.education.map((item) => item.id).indexOf(req.params.edu_id);

		// Splice out of array
		profile.education.splice(removeIndex, 1);

		// Save
		const updatedProfile = await profile.save();
		res.status(200).json(updatedProfile);
	} catch (error) {
		console.log(error);
	}
};
