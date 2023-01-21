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

// This function and the unHashString() function could be anything and is just a way to show how to make cookies more secure
exports.hashString = (string) => {
    const hashed = string.split("").reverse().join("");
    return hashed;
}

exports.unHashString = (string) => {
    const unhashed = string.split("").reverse().join("");
    return unhashed;
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