const otherFunctions = require("./functions/otherFunctions")
const articleFunctions = require("./functions/articleFunctions")
const userFunctions = require("./functions/userFunctions")

const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json())
app.use(cookieParser("secret"));
app.use(otherFunctions.logActivity)
const port = 3333;

// Find and send articles for the home page previews
app.get("/articles", (req, res) => {
    const articles = articleFunctions.getArticles()
    console.log("Fetched articles")
    res.send(articles)
})

// When the user tries to log in check the password and set a cookie if it matches
app.post("/login", (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    const verified = otherFunctions.verifyUser(username, password)
    if(verified === true) {
        res.cookie('user', otherFunctions.hashString(username), {
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

// Clear the cookie responsible for login
app.get("/logout", (req, res) => {
    console.log("logout initiated")
    res.clearCookie('user')
    res.send({ message: "Logged out" })
})

// Find and send the user data by username
app.get("/profile:username", (req, res) => {
    const username = otherFunctions.unHashString(req.params.username)
    console.log("Getting profile of: " + username)
    const profile = userFunctions.getUserByUsername(username)
    res.send({username: profile.username, email: profile.email, password: profile.password, clearance: profile.clearance})
})

// Change password
app.patch("/profile:username/p", (req, res) => {
    const username = req.params.username
    const newpass = req.body.new
    userFunctions.changePassword(username, newpass)
    res.send(newpass + "!")
})

// When user wants to delete their account
app.delete("/profile:username", (req, res) => {
    const username = req.params.username
    userFunctions.deleteUser(username)
    res.clearCookie('user')
    res.send({ message: "Deleted" })
})

// When admin deletes the user
app.delete("/profile:username/lol", (req, res) => {
    const username = req.params.username
    userFunctions.deleteUser(username)
    res.send({ message: "Deleted" })
})

// Delete an article
app.delete("/article:id", (req, res) => {
    const id = req.params.id
    articleFunctions.removeArticle(id)
    console.log('Article ' + id + ' removed')
    res.send('Article ' + id + ' removed')
})

// Find and send the article with given id
app.get("/article:id", (req, res) => {
    const id = req.params.id
    console.log(id)
    const article = articleFunctions.getArticleById(id)
    res.send(article)
})

app.get("/users", (req, res) => {
    const users = userFunctions.getUsers()
    res.send(users)
})

app.put("/articles", (req, res) => {
    const id = articleFunctions.createArticle(req.body)
    res.send('Article created with an id ' + id)
})

app.get('/search', (req, res) => {
    const { query } = req.query;
    const filteredArticles = articleFunctions.searchArticles(query)
  
    res.send(filteredArticles);
});

console.log(`Server listening at port ${port}`);
app.listen(port);