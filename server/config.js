'use strict';

require('dotenv').config();

// required variables
const ENV_VARS = [ 'DB_NAME', 'DB_USERNAME', 'DB_PASSWORD' ];

module.exports = {
	// DATABASE
	dbName: process.env.DB_NAME,
	dbUsername: process.env.DB_USERNAME,
	dbPassword: process.env.DB_PASSWORD,
	dbHostName: process.env.DB_HOST_NAME,

	// Password
	secretorKey: process.env.SECRETOR_KEY,

	// Preferred port
	port: process.env.PORT || 8080,

	get dbUri() {
		return `mongodb://${this.dbUsername}:${this.dbPassword}@${this.dbHostName}/${this.dbName}`;
	},

	checkEnvVariables: () => {
		ENV_VARS.forEach((key) => {
			if (!process.env[key]) {
				console.log('WARNING: Missing the environment variable ' + key);
			} else {
				// Check that urls use https
				if ([].includes(key)) {
					const url = process.env[key];
					if (!url.startsWith('https://')) {
						console.log('WARNING: Your ' + key + ' does not begin with "https://"');
					}
				}
			}
		});
	}
};
