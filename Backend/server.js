const authFunctions = require("./functions/authFunctions")
const articleFunctions = require("./functions/articleFunctions")
const userFunctions = require("./functions/userFunctions")

const express = require("express");
const cookieParser = require('cookie-parser');
const { profile } = require("console");

const app = express();
app.use(express.json())
app.use(cookieParser("secret"));
const port = 3333;

app.get("/home", (req, res) => {
    const articles = articleFunctions.getArticles()
    console.log("Fetched articles")
    res.send(articles)
})

// When the user tries to log in check the password and set a cookie if it matches
app.post("/login", (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    const verified = authFunctions.verifyUser(username, password)
    if(verified === true) {
        res.cookie('user', username, {
            maxAge: 1800000, // 30 minutes in milliseconds
            httpOnly: false,
            signed: false // encrypt the cookie
        });
        res.send({ message: 'Login successful' });
    }
    else {
        res.send({ message: verified })
    }    
});

app.get("/logout", (req, res) => {
    console.log("logout initiated")
    res.clearCookie('user')
    res.send({ message: "Logged out" })
})

app.get("/profile:username", (req, res) => {
    const username = req.params.username
    console.log("Getting profile of: " + username)
    const profile = userFunctions.getUserByUsername(username)
    res.send({username: profile.username, email: profile.email, password: profile.password, clearance: profile.clearance})
})

app.get("/article:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    const article = articleFunctions.getArticleById(id)
    res.send(article)
})

console.log(`Server listening at port ${port}`);
app.listen(port);