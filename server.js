const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, function() {
  console.log("Listening on port: " + port);
});