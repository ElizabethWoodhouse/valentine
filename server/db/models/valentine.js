const Sequelize = require("sequelize");
const db = require("../db");

const Valentine = db.define("valentine", {
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	timesGenerated: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
		validate: {
			min: 0,
			notNull: true,
		},
	},
	approved: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
});
