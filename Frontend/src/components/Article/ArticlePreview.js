import { useNavigate } from 'react-router';

const ArticlePreview = ({ a }) => {
  const navigate = useNavigate()

  const handleArticleClick = () => {
    navigate(`/article/${a.id}`)
  }

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
          <h2 className='clickable-preview' onClick={handleArticleClick}>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      )
    }
  }

  return checkEmpty(a)
};

export default ArticlePreview