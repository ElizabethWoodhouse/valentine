const router = require("express").Router();
const { Valentine, Genre } = require("../db/models");

router.get("/", async (req, res, next) => {
	try {
		const genres = await Genre.findAll({
			include: [Valentine],
		});
		res.json(genres);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
