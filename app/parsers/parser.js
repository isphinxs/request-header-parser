"use strict";

function parser() {
    this.parseRequest = function(req, res) {
        var result = {
            ipaddress: getIP(req.connection.remoteAddress),
            language: getLanguage(req.headers["accept-language"]),
            software: getOS(req.headers["user-agent"]),
        };
        res.json(result);
    };
    
    function getIP(remoteAddress) {
        if (remoteAddress.indexOf(":") > -1) {
            return remoteAddress.split(":").reverse()[0];
        } else {
            return remoteAddress;
        }
    }
        
    function getLanguage(acceptLanguage) {
        return acceptLanguage.split(",")[0];
    };
    
    function getOS(userAgent) {
        var OS = userAgent.split(/[\(\)]/)[1];
        return OS;
    }
}

module.exports = parser;