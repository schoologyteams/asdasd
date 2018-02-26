const mysql = require('mysql');
var connection = {};

  connection = mysql.createConnection(
    host: localhost,
    port: 8889,
    user: root,
    password: root,
    database: 'burgers_db'
  );


connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database as id: ' + connection.threadId);
});

module.exports = connection;
