import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, redirect } from "react-router-dom";

const logout = () => {
    axios.get("/logout")
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
            <ul className='nav-list'>
                <li className='nav-title'>
                    <h2 className="logo">ArticleSuperSite</h2>
                </li>
                <li className='nav-item'>
                    <Link to={"/"} className="nav-item">Home</Link>
                </li>
                <li className='nav-item'>
                    <form className='search-form'>
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </li>
                {isLoggedIn ? (
                    <li className='nav-item'>
                        <Link to={`/profile/${user.id}`} className="nav-item">{user.username}</Link>
                        <Link to={'/'} onClick={logout} className="nav-item">Logout</Link>
                    </li>
                ) : (
                    <li className='nav-item'>
                        <Link to={'/login'} className="nav-item">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar