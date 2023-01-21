const { default: axios } = require("axios")
const { useState, useEffect } = require("react")
const { useNavigate } = require("react-router")

const ArticleList = (userid, clearance) => {
    const navigate = useNavigate()
    const [articles, setArticles] = useState([])

    const handleGoTo = (artid) => {
        navigate(`/article/${artid}`)
    }

    const handleDelete = async (artid) => {
        axios.delete(`/articles/${artid}`)
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
        else if(clearance === 1 && article.id == userid) {
            return <button onClick={() => handleDelete(article.id)}>Delete article</button>
        }
        else {
            return <></>
        }
    }

    // This displays the correct 
    const byClearance = () => {
        if (clearance == 2 || clearance == 1) {
            return (
                <div className="article-list">
                    {articles.map(article => (
                        <div key={article.id}>
                            id: {article.id} Title: {article.title} Summary: {article.summary}
                            <button onClick={() => handleGoTo(article.id)}>Go to article</button>
                            <DeleteButton article={article}/>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            return;
        }
    }

    return byClearance
}

export default ArticleList