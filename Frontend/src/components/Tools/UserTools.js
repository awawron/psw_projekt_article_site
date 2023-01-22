import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

const UserTools = ({profile}) => {
    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [canChangePassword, setCanChangePassword] = useState(false)

    const checkEmpty = (value) => {
        if (value.length > 0) {
            return true    
        }
        return false
    }

    const changePassword = async () => {
        await axios.patch(`/profile${profile.username}/p`, {new: password})
            .then(res => window.alert("Password successfuly changed to " + res.data))
    }

    const deleteAccount = async () => {
        if (window.confirm('This action is irreversible. Are you sure you want to permanently delete your account?'))
        {
            await axios.delete(`/profile${profile.username}`).then(window.alert('Account deleted'))
        }
    }

    return (
        <div>
            Change password: <input type='text' value={password} onChange={(e) => {
                setPassword(e.target.value)
                setCanChangePassword(checkEmpty(e.target.value))
            }} />
            <button disabled={!canChangePassword} onClick={changePassword}>Save</button><br />
            
            <button onClick={() => {
                deleteAccount()
                navigate('/')
                }}>Delete account</button>
        </div>
    )
}

export default UserTools