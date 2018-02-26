const mysql = require('mysql');


var connection = mysql.createConnection({
  host: "ec2-174-129-33-29.compute-1.amazonaws.com",
  user: "jfaranbuybthxj",
  password: "9984cc0dbd7ad4e38ced25345a171a5f6291117053bbf4ef079c50cfcd326449",
  port: 5432,
  database: "de0gqukbr0hu7u"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database as id: ' + connection.threadId);
});

module.exports = connection;
