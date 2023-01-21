const { useState, useEffect } = require("react")
const { useNavigate } = require("react-router")

const Article = (id) => {
    const navigate = useNavigate()

    const handleGoTo = () => {
        navigate(`/article${id}`)
    }

    const handleDelete = () => {

    }

    useEffect(() => {

    }, [])

    return (
        <div>
            id: {article.id} Title: {article.title} Summary: {article.summary}
            <button onClick={handleGoTo}>Go to article</button>
            <button onClick={handleDelete}>Delete article</button>
        </div>
    )
}

const ArticleList = () => {
    const [ids, setIds] = useState([])
}