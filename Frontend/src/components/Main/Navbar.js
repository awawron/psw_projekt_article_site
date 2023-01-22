import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link, redirect } from "react-router-dom";
import Cookies from 'js-cookie'

// The navbar is constantly present in the top of the page.
// It checks the cookie to see if the user is logged in. Then shows the correct button for log in/sign up or Profile respectively
export const Navbar = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('')

    // TEMPORARY TESTING FUNCTIONALITY
    const handleDeleteCookie = () => {
        axios.get('/logout').then(res => window.alert(res.message))
    }

    // Check the cookie for if the user is logged in. Display the correct buttons.
    useEffect(() => {
        const checkUser = async () => {
            const cook = Cookies.get('user')
            return cook
        }

        checkUser().then(us => {
            if (us !== undefined) {
                setUser(us)
                setIsLoggedIn(true)
            }
        })
    }, []);

    // Send the logout message to the server and set the login variables to nothing before redirecting to home page
    const handleLogout = async () => {
        await axios.get("/logout")
        setUser(null)
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-title'>
                    <h2 className="logo">ArticleSuperSite</h2>
                </li>
                <li className='nav-item'>
                    <Link to={"/"} className="nav-item">Home</Link>
                </li>
                {/* <li className='nav-item'>
                    <button onClick={handleDeleteCookie}>Delete cookie</button>
                </li> */}
                {isLoggedIn ? (
                    <li className='nav-item'>
                        <Link to={`/profile`} className="nav-item">Profile</Link>
                        <a onClick={handleLogout} className="nav-item">Logout</a>
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