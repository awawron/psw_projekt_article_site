const fs = require('fs');
const path = require('path')

const readFile = (p) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, p)))
}

// These are the functions related to articles and the articles.json file used on the server side

exports.getArticles = () => {
    const data = readFile('../data/articles.json');

    return data
}

// Returns the article with given id
exports.getArticleById = (id) => {
    const data = readFile('../data/articles.json');
    const article = data.find(article => article.id == id);
    
    if (article == undefined) {
        return false
    }
    return article;
}


exports.removeArticle = (id) => {
    const data = readFile('../data/articles.json');
    new_data = data.filter(article => article.id !== id)
    fs.writeFile('articles.json', JSON.stringify(articles))
}

exports.addArticle = (article) => {
    
}