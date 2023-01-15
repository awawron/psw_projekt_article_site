import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const logout = () => {
    // TODO
    // Axios sends the logout message
}

// The navbar is constantly present in the top of the page.
// It checks the cookie to see if the user is logged in. Then shows the correct button for log in/sign up or Profile respectively
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        // TODO
        // Check the cookie for if the user is logged in
    }, []);

    return (
        <nav>
            <h2 className="logo">ArticleSuperSite</h2>
            <Link to={"/"} className="nav-item">Home</Link>
            <form>
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
            </form>
            {isLoggedIn ? (
            <>
                <Link to={`/profile/${user.id}`} className="nav-item">{user.username}</Link>
                <Link to={'/'} onClick={logout} className="nav-item">Logout</Link>
            </>
            ) : (
            <Link to={'/login'} className="nav-item">Login</Link>
            )}
        </nav>
    );
};

export default Navbar