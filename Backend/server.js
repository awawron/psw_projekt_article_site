const userFunctions = require("./functions/authFunctions")
const articleFunctions = require("./functions/articleFunctions")

const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json())
app.use(cookieParser("secret"));
const port = 3333;

app.get("/home", (req, res) => {
    const articles = articleFunctions.getArticles()
    console.log(articles)
    res.send(articles)
})

// When the user tries to log in check the password and set a cookie if it matches
app.post("/login", (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    const verified = userFunctions.verifyUser(username, password)
    if(verified === true) {
        res.cookie('user', username, {
            maxAge: 1800000, // 30 minutes in milliseconds
            httpOnly: true,
            signed: true // encrypt the cookie
        });
        res.send({ message: 'Login successful' });
    }
    else {
        res.send({ message: verified })
    }    
});

app.get("/logout", (req, res) => {
    console.log("logout initiated")
    res.clearCookie('username')
    res.send({ message: "Logged out" })
})

console.log(`Server listening at port ${port}`);
app.listen(port);