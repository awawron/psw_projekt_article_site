const fs = require('fs');
const path = require("path");

const readFile = (p) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, p)))
}

const writeFile = (p, data) => {
    fs.writeFileSync(path.resolve(__dirname, p), JSON.stringify(data, null, 4));
}

exports.getUsers = () => {
    const data = readFile('../data/users.json');
    return data
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

exports.deleteUser = (username) => {
    console.log('Deleting user ' + username)
    const data = readFile('../data/users.json');
    const updatedData = data.filter(user => user.username !== username);
    writeFile('../data/users.json', updatedData)

    return username
}

exports.changePassword = (username, newpassword) => {
    console.log('Changing password of ' + username + ' to ' + newpassword)
    const data = readFile('../data/users.json');
    const user = data.find(user => user.username === username);

    if (user) {
        user.password = newpassword;

        writeFile('../data/users.json', data)
    }
    
    return newpassword
}