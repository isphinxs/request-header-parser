"use strict";

var Parser = require(process.cwd() + "/app/parsers/parser.js");

module.exports = function(app) {
    var parser = new Parser();
    
    app.route("/")
        .get(function (req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });
    
    app.route("/whoami")
        .get(parser.parseRequest);
};