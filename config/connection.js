const mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8889,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database as id: ' + connection.threadId);
});

module.exports = connection;
