var express = require("express"),
    routes = require("./app/routes/index.js");

var app = express();
var port = process.env.PORT || 8080;

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(port, function() {
    console.log("Listening on port " + port + "...");
})