const router = require("express").Router();
const { Valentine, Genre } = require("../db/models");

router.get("/", async (req, res, next) => {
	try {
		const allValentines = await Valentine.findAll();
		res.json(allValentines);
	} catch (err) {
		next(err);
	}
});

router.get("/:genre", async (req, res, next) => {
	try {
		const valentines = await Genre.findAll({
			where: {
				name: req.params.genre,
			},
			include: [Valentine],
		});
		res.json(valentines);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
