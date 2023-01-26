const fs = require('fs');
const path = require('path')
const otherFunctions = require("./otherFunctions")

const readFile = (p) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, p)))
}

const writeFile = (p, data) => {
    fs.writeFileSync(path.resolve(__dirname, p), JSON.stringify(data, null, 4));
}

// These are the functions related to articles and the articles.json file used on the server side

exports.getArticles = () => {
    const data = readFile('../data/articles.json');

    return data
}

exports.getIds = () => {
    const data = readFile('../data/articles.json');
    const ids = data.map(article => article.id)
    console.log(ids)
    
    return ids
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
    console.log('Deleting article ' + id)
    const data = readFile('../data/articles.json');
    const new_data = data.filter(article => article.id != id)
    writeFile('../data/articles.json', new_data)
}



exports.createArticle = (article) => {
    const data = readFile('../data/articles.json');
    const ids = this.getIds()
    ids.sort((a, b) => a - b);
    const id = otherFunctions.findSmallestNewId(ids)
    const a = {id: id, ...article, comments: []}
    data.push(a)
    writeFile('../data/articles.json', data)

    return id
}

exports.searchArticles = (query) => {
    const data = readFile('../data/articles.json');
    const filtered = data.filter(article => {
        return article.title.includes(query) || article.body.includes(query);
    });

    return filtered
}