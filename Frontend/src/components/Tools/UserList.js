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

    const handleElevate = (username) => {
        axios.patch(`profile${username}/plus`)
            .then((res) => {
                window.alert(res.data.message)
                axios.get("/users")
                .then(res => setUsers(res.data))
    })
    }

    const handleDelevate = (username) => {  
        axios.patch(`profile${username}/minus`)
            .then((res) => {
                window.alert(res.data.message)
                axios.get("/users")
                .then(res => setUsers(res.data))
            })
    }

    useEffect(() => {
        axios.get("/users")
            .then(res => setUsers(res.data))
    }, [])

    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.id}>
                    id: {user.id} Username: {user.username} Email: {user.email} Clearance: {user.clearance}<br />
                    <button onClick={() => handleDelete(user.username)}>Delete user</button>
                    <button onClick={() => handleElevate(user.username)}>Elevate</button>
                    <button onClick={() => handleDelevate(user.username)}>Delevate</button><br /><br />
                </div>
            ))}
        </div>
    )
}

export default UserList