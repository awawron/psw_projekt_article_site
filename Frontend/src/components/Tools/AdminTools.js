import ArticleList from "./ArticleList"
import UserList from "./UserList"

const AdminTools = (id) => {
    return (
        <div>
            <ArticleList userid={id} clearance={2}/>
            <UserList />
        </div>
    )
}

export default AdminTools