//require models and export them here!
const Valentine = require("./valentine");
const Genre = require("./genre");
//make associations before exporting!

Genre.hasMany(Valentine);
Valentine.belongsTo(Genre);

module.exports = {
	Genre,
	Valentine,
};
