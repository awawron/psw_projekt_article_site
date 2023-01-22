import { useEffect, useState } from "react"
import axios from "axios"

const UserList = () => {
    const [users, setUsers] = useState([])

    const handleDelete = (username) => {
        axios.delete(`/profile${username}/lol`)
        .then(() => {
            setUsers(users.filter(user => user.username !== username));
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
                    id: {user.id} Username: {user.username} Email: {user.email}<br />
                    <button onClick={() => handleDelete(user.username)}>Delete user</button><br /><br />
                </div>
            ))}
        </div>
    )
}

export default UserList