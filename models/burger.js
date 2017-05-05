// Import ORM object to create functions to interact with database
var orm = require('../config/orm.js');

var burger = {
	all: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},

	insert: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function(res) {
			callback(res);
		});
	},

	update: function(objColVals, condition, callback) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			callback(res);
		});
	}

};

// Export database functions for controller
module.exports = burger;