const userFunctions = require("./userFunctions")
const fs = require('fs');
const { nextTick } = require("process");

// These are the various functions related to authorizing user actions and access

// This function checks if username and password match
exports.verifyUser = (username, password) => {
    user = userFunctions.getUserByUsername(username)
    if (user == false) {
        return "Incorrect username"
    }
    else if(password !== user.password) {
        return "Incorrect password"
    }
    else {
        return true
    }
}

exports.logActivity = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  
    fs.appendFile('access.log', log, (err) => {
        if (err) {
        console.error(err);
        }
    });

    next()
}