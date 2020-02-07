'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const compression = require('compression');

const config = require('./config');
const postsRoutes = require('./routes/posts');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Use Routes
app.use('/api/posts', postsRoutes);

// Check if all environment variables are set
config.checkEnvVariables();

mongoose
	.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		const server = app.listen(config.port, () => {
			console.log('Your app is listening on port ' + server.address().port);
		});
	})
	.catch((err) => console.log(err));
