// Import MySQL connection
var connection = require('../config/connection.js');

// Helper function for SQL syntax to print question marks
function printQuestionMarks(num) {
	var arr = [];
	for (var i=0; i< num.length; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Helper function for SQL syntax
function objToSql(obj) {
	var arr = [];
	for (var key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			arr.push(key + "=" + obj[key]);
		}
	}
	return arr.toString();
}

// Object for all our MySQL statements
var orm = {

	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	insertOne: function(tableInput, cols, vals, callback) {
		var queryString = "INSERT INTO " + tableInput;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	updateOne: function(tableInput, objColVals, condition, callback) {
		var queryString = "UPDATE " + tableInput;

		queryString += "SET";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	}

};

// Export ORM object for the model
module.exports = orm;