import React, { useState, useEffect } from 'react';

const ArticlePreview = ({ a }) => {
  const checkEmpty = (article) => {
    if (article === {} || article === undefined) {
      return (
        <div>
          <h2>Loading title...</h2>
          <p>Loading summary...</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      )
    }
  }

  return checkEmpty(a)
};

export default ArticlePreview