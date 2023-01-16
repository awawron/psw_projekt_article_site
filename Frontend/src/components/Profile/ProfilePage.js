import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        // TODO
        // Check the cookie for if the user is logged in
        // If not redirect to login
    }, []);

    return (<div>
        <h2>Your profile here</h2>
    </div>)
}

export default ProfilePage