import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "../Main/Navbar";
import CommentList from "./CommentList";

const ArticlePage = () => {
    const [article, setArticle] = useState({title: 'Loading...', body: 'Loading...', comments: []});

    useEffect(() => {
        const url = window.location.href.split('/');
        const id = url[url.length - 1];
        console.log(id)
        axios.get(`/article${id}`)
            .then(res => setArticle(res.data));
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