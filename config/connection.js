// Load MySQL node package
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "tcbtran",
	password: "My$QL_webprogramming",
	database: "burgers_db"
});

// Establish connection to MySQL
connection.connect(function(err) {
	if (err) {
		console.log("Error connecting:%s", err.stack);
		return;
	}
	console.log("Connected as ID:%s", connection.threadId);
});

// Export connection for ORM use
module.exports = connection;