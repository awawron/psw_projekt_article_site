const fs = require('fs');

// These are the functions related to articles and the articles.json file used on the server side

// returns the article from given id
export const getArticleById = (id) => {
  const data = JSON.parse(fs.readFileSync('../data/articles.json', 'utf-8'));
  const article = data.find(article => article.id === id);
  
  return article;
}

// returns n random existing ids
export const getRandomIds = (n) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  const ids = data.map(item => item.id);
  const randomIds = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * ids.length);
    randomIds.push(ids[randomIndex]);
    ids.splice(randomIndex, 1);
  }
  return randomIds;
}
