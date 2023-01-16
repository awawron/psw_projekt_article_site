const fs = require('fs');
const path = require("path");

const readFile = (p) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, p)))
}

exports.getUserById = (id) => {
    const data = readFile('../data/users.json');
    const user = data.find(user => user.id === id);
    
    return user;
}

// Find a user by the username. Returns false if the user is not found
exports.getUserByUsername = (username) => {
    const data = readFile('../data/users.json');
    const user = data.find(user => user.username === username);
    
    // If the user is not found return false
    if (user == undefined) {
        return false
    }
    return user;
}