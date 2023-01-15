import React, { useState, useEffect } from 'react';
import axios from "axios"

const ArticlePreview = ({ id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    // axios.get(`/articles/${id}`)
    // .then(res => res.json())
    // .then(data => setArticle(data));
  }, []);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
    </div>
  );
};

export default ArticlePreview