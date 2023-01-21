const User = (user) => {
    return (
        <div>
            id: {user.id} Username: {user.username} Email: {user.email}
            <button onClick={handleDelete}>Delete user</button>
        </div>
    )
}

const UserList = () => {
    
}