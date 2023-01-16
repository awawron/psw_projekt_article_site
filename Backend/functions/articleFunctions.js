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
    const article = data.find(article => article.id === id);
    
    return article;
}

exports.removeArticle = (id) => {
    const data = readFile('../data/articles.json');
    new_data = data.filter(article => article.id !== id)
    fs.writeFile('articles.json', JSON.stringify(articles))
}

exports.addArticle = (article) => {
    
}

// Returns n random existing article ids
exports.getRandomIds = (n) => {
    const data = JSON.parse(fs.readFileSync('data.json'));
    const ids = data.map(item => item.id);
    const randomIds = [];
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * ids.length);
        randomIds.push(ids[randomIndex]);
        ids.splice(randomIndex, 1);
    }
    return randomIds;
}