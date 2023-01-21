import { useEffect } from "react"

const UserList = () => {
    const [users, setUsers] = useState([])

    const handleDelete = (usid) => {
        axios.delete(`/user/${usid}`)
        .then(() => {
            setUsers(users.filter(user => user.id !== usid));
        });
    }

    useEffect(() => {
        axios.get("/users")
            .then(res => setUsers(res.data))
    }, [])

    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.id}>
                    id: {user.id} Username: {user.username} Email: {user.email}
                    <button onClick={() => handleDelete(user.id)}>Delete user</button>
                </div>
            ))}
        </div>
    )
}

export default UserList