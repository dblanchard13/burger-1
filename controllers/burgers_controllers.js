var express = require('express');

var router = express.Router();

// Import model (burger.js) to use database functions
var burger = require('../models/burger.js');

// Create routes and logic within routes
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.insert(["burger_name", "devoured"], [req.body.name, req.body.devoured], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);
	burger.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Export routes to be used in server.js
module.exports = router;