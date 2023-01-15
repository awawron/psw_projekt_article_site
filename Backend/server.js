const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const port = 3333;

// TODO
// handle http requests

// unchecked-start
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Verify the user's credentials
    const token = jwt.sign({username}, process.env.SECRET);
    res.cookie('token', token, {
      maxAge: 900000, // 15 minutes in milliseconds
      httpOnly: true, // prevent client-side access to the cookie
      signed: true // encrypt the cookie
    });
    res.json({ message: 'Login successful', token });
});

app.get('/profile', (req, res) => {
    // Check if the token cookie exists
    const token = req.signedCookies.token;
    if (token) {
      // The user is logged in, show their profile
      const decoded = jwt.verify(token, process.env.SECRET);
      res.json({ message: 'Welcome to your profile', username: decoded.username });
    } else {
      // The user is not logged in, return an error
      res.status(401).json({ message: 'Not authorized' });
    }
});
// unchecked-end

console.log("Server listening at port 3001");
app.listen(port);