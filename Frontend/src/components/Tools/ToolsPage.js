import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AdminTools from "./AdminTools";
import AuthorTools from "./AuthorTools";
import UserTools from "./UserList";

const ToolsPage = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})
    
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
                <UserTools profile={profile} /><br />
                <h2>Admin tools</h2><br />
                <AdminTools id={profile.id}/>
            </div>)
        }
        else if (profile.clearance === 1) {
            return (<div>
                <UserTools profile={profile} /><br />
                <h2>Author tools</h2><br />
                <AuthorTools id={profile.id}/>
            </div>)
        }
        else {
            return (<div>
                <UserTools profile={profile} />
            </div>)
        }
    }

    return correctTools()
}

export default ToolsPage