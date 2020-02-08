const Sequelize = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(config.dbUri);
// const sequelize = new Sequelize("smart-brain", "postgres", "postgrese", {
//   dialect: "postgres",
//   host: "127.0.0.1"
// });

module.exports = sequelize;
