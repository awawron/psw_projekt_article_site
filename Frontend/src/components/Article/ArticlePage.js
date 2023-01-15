import { useEffect, useState } from "react"
import CommentList from "./CommentList";

const ArticlePage = () => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        // axios.get(`/articles/${id}`)
        // .then(res => res.json())
        // .then(data => setArticle(data));
    }, []);

    return (<div>
        <h2>{article.title}</h2>
        <div>{article.body}</div>
        <CommentList comments={article.comments}/>
    </div>)
    
}

export default ArticlePage