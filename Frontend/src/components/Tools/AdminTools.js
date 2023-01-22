import ArticleList from "./ArticleList"
import UserList from "./UserList"

const AdminTools = (id) => {
    return (
        <div>
            <h3>Articles:</h3>
            <ArticleList userid={id} clearance={2}/>
            <h3>Users:</h3>
            <UserList />
        </div>
    )
}

export default AdminTools