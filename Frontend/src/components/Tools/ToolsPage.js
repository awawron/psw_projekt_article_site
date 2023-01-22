import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import AdminTools from "./AdminTools";
import AuthorTools from "./AuthorTools";
import UserTools from "./UserTools";
import Navbar from "../Main/Navbar";

const ToolsPage = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})
    
    const handleCreateArticle = () => {
        const example = {
            author: profile.username,
            title: "Example",
            summary: "Example summary",
            body: "Example body"
        }
        axios.put('/articles', example).then(res => window.location.reload(false))
    }

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
                fetchProfile(us).then(prof => {setProfile(prof.data)})
            }
            else {
                navigate('/login')
            }
        })
    }, []);

    const correctTools = () => {
        if(profile.clearance === 2) {
            return (<div>
                <Navbar />
                <div className="tools">  
                    <h1>Tools</h1>
                    <UserTools profile={profile} /><br />
                    <h2>Admin tools</h2><br />
                    <AdminTools id={profile.id}/>
                </div>
            </div>)
        }
        else if (profile.clearance === 1) {
            return (<div>
                <Navbar />
                <div className="tools">                
                    <h1>Tools</h1>
                    <UserTools profile={profile} /><br />
                    <h2>Author tools</h2><br />
                    <button onClick={handleCreateArticle}>Create example article</button>
                    <AuthorTools id={profile.username}/>
                </div>
            </div>)
        }
        else {
            return (<div>
                <Navbar />
                <div className="tools">  
                    <h1>Tools</h1>
                    <UserTools profile={profile} />
                </div>
            </div>)
        }
    }

    return correctTools()
}

export default ToolsPage