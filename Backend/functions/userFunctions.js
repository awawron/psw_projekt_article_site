const fs = require('fs');
const path = require("path");
const otherFunctions = require("./otherFunctions")

const readFile = (p) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, p)))
}

const writeFile = (p, data) => {
    fs.writeFileSync(path.resolve(__dirname, p), JSON.stringify(data, null, 4));
}

exports.getIds = () => {
    const data = readFile('../data/users.json');
    const ids = data.map(article => article.id)
    console.log(ids)
    
    return ids
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

exports.createUser = (username, email, password) => {
    const user = {username: username, email: email, password: password}
    const data = readFile('../data/users.json');
    if(data.some((user) => user.username == username)) {
        return "Username already exists"
    }
    const ids = this.getIds()
    ids.sort((a, b) => a - b);
    const id = otherFunctions.findSmallestNewId(ids)
    const a = {id: id, ...user, clearance: 0}
    data.push(a)
    writeFile('../data/users.json', data)

    return "Signup successful"
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

exports.elevateUser = (username) => {
    const data = readFile('../data/users.json');
    const user = data.find(user => user.username === username);
    if(user) {
        if(user.clearance < 3) {
            user.clearance += 1
            return "Clearance updated"
        }
        else {
            return "Clearance too big"
        }
    }
}

exports.elevateUser = (username) => {
    const data = readFile('../data/users.json');
    const user = data.find(user => user.username === username);
    if(user) {
        if(user.clearance > 0) {
            user.clearance -= 1
            writeFile('../data/users.json', data)
            return "Clearance updated"
        }
        else {
            return "Clearance too low"
        }
    }
}