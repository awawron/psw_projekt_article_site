import { useEffect, useState } from "react"
import Navbar from "../Main/Navbar";
import CommentList from "./CommentList";

const ArticlePage = () => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        // axios.get(`/articles/${id}`)
        // .then(res => res.json())
        // .then(data => setArticle(data));
    }, []);

    return (<div>
        <Navbar />
        <div className="page">
            <h2>{article.title}</h2>
            <div>{article.body}</div>
            <CommentList comments={article.comments}/>
        </div>
    </div>)
    
}

export default ArticlePage