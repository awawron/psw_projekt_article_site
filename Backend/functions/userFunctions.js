const fs = require('fs');

// These are the functions related to users and the users.json file used on the server side

const getUserById = (id) => {
  const data = JSON.parse(fs.readFileSync('../data/users.json', 'utf-8'));
  const user = data.find(user => user.id === id);
  
  return user;
}

export default getUserById