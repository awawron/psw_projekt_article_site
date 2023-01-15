import React, { useState, useEffect } from 'react';

// The navbar checks the cookie to see if the user is logged in. Then shows the correct button for log in/sign up or Profile respectively
// The property "in" is either true or false. The "id" allows to show the right content for the user and is set to null if the user logs out.
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split('; ');
        const loggedInCookie = cookies.find(cookie => cookie.startsWith('loggedIn='));
        if (loggedInCookie) {
            const loggedInValue = loggedInCookie.split('=')[1];
            setIsLoggedIn(loggedInValue === 'true');
        }
    }, []);

    return (
        <nav>
            <img src="logo.png" alt="Logo" className="logo" />
            <a href="/" className="nav-item">Home</a>
            <form>
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
            </form>
            {isLoggedIn ? (
            <>
                <a href={`/profile/${user.username}`} className="nav-item">{user.username}</a>
                <button onClick={() => dispatch(logout())} className="nav-item">Logout</button>
            </>
            ) : (
            <button onClick={() => dispatch(login(user))} className="nav-item">Login</button>
            )}
        </nav>
    );
};

export default Navbar