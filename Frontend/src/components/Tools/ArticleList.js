import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

const ArticleList = ({userid, clearance}) => {
    const navigate = useNavigate()
    const [articles, setArticles] = useState([])

    const handleGoTo = (artid) => {
        navigate(`/article/${artid}`)
    }

    const handleDelete = async (artid) => {
        axios.delete(`/article${artid}`)
        .then(() => {
            setArticles(articles.filter(article => article.id !== artid));
        });
    }

    useEffect(() => {
        axios.get("/articles")
            .then(res => setArticles(res.data))
    }, [])

    const DeleteButton = (article) => {
        if (clearance === 2) {
            return <button onClick={() => handleDelete(article.id)}>Delete article</button>
        }
        else if(clearance === 1 && article.article.author == userid.id) {
            return <button onClick={() => handleDelete(article.article.id)}>Delete article</button>
        }
        else {
            return <></>
        }
    }

    return (
        <div className="article-list">
            {articles.map(article => (
                <div key={article.id}>
                    id: {article.id} Title: {article.title} Summary: {article.summary}<br />
                    <button onClick={() => handleGoTo(article.id)}>Go to article</button>
                    <DeleteButton article={article}/><br /><br />
                </div>
            ))}
        </div>
    )
}

export default ArticleList