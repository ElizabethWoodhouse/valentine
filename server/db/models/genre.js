const Sequelize = require("sequelize");
const db = require("../db");

const Genre = db.define("genre", {
	name: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true,
			notNull: true,
		},
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 0,
		validate: {
			min: 0,
			max: 10000,
			notNull: true,
		},
	},
	description: {
		type: Sequelize.TEXT,
	},
});

module.exports = Genre;
