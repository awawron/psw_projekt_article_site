import { useEffect, useState } from "react"

const UserTools = (profile) => {
    const [areYouSure, setAreYouSure] = useState(false)

    useEffect(() => {
        console.log(areYouSure)
    }, [])

    const changeUsername = () => {
        // change username
    }

    const changePassword = () => {
        // change password
    }

    const deleteAccount = () => {
        console.log(areYouSure)
        if(areYouSure) {
            // delete account
        }
        else {
            window.alert("This is irreversible. If you really want to delete your account, press the button again.")
            setAreYouSure(true)
        }
    }

    return (
        <div>
            <h1>This is a placeholder</h1>
            Change username: <input type={text} /><button onClick={changeUsername}>Save</button><br />
            Change password: <input type={text} /><button onClick={changePassword}>Save</button><br />
            <button onClick={deleteAccount}>Delete account</button>
        </div>
    )
}

export default UserTools