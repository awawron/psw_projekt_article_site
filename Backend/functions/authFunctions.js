const userFunctions = require("./userFunctions")

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