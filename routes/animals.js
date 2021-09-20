var express = require("express");
var router = express.Router();

let animals = [
	{
		id: 1,
		animalType: "dog",
	},
	{
		id: 2,
		animalType: "cat",
	},
	{
		id: 1,
		animalType: "horse",
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("animals", { animals: animals});
});

module.exports = router;
