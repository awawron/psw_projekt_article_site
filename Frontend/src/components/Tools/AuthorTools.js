import ArticleList from "./ArticleList"

const AuthorTools = (username) => {
    return (
        <div>
            <ArticleList userid={username} clearance={1}/>
        </div>
    )
}

export default AuthorTools