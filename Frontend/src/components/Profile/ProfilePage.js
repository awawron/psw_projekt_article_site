import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Main/Navbar";
import Cookies from "js-cookie";
import axios from "axios";

const ProfilePage = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState({})

    // A helper function that translates numbers into words
    const getClearance = (number) => {
        switch (number) {
            case 0:
                return "Normal user";
            case 1:
                return "Author";
            case 2:
                return "Admin";
            default:
                return "";
        }
    }

    // Check if the user is logged in and has access to the profile. If yes fetch the profile, if not redirect to the login page.
    useEffect(() => {
        const checkUser = async () => {
            const cook = Cookies.get('user')
            return cook
        }

        const fetchProfile = async (username) => {
            const profile = axios.get(`/profile${username}`)
            return profile
        }

        checkUser().then(us => {
            if (us !== undefined) {
                setIsLoggedIn(true)
                fetchProfile(us).then(prof => {console.log(prof.data); setProfile(prof.data)})
            }
            else {
                navigate('/login')
            }
        })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="page">
                {isLoggedIn ? (
                    <div>
                        <h2>Welcome {profile.username}!</h2>
                        <div>
                            <div>Username : {profile.username}</div>
                            <div>Email    : {profile.email}</div>
                            <div>Password : {profile.password}</div>
                            <div>User type: {getClearance(profile.clearance)}</div>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default ProfilePage