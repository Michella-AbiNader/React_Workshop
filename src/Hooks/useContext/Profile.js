import React, {useContext, useState} from 'react'
import AuthContext from './AuthContext'

function Profile() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {user, login, logout} = useContext(AuthContext)

    const handleLogin = () =>{
        login(username, password)
        setUsername("")
        setPassword("")
    }
  return (
    <div>
        {
            user?(
                <div>
                    <h2>Welcom {user.username}</h2>
                    <button onClick = {logout}>Logout</button>
                </div>
            ):(<div>
                <input type = 'text' placeholder='username' value={username} onChange={(e => setUsername(e.target.value))}/>
                <input type = 'password' placeholder='password' value={password} onChange={(e => setPassword(e.target.value))}/>
                <button onClick = {handleLogin}>Click me</button>
            </div>) 
        }
           
       
    </div>
  )
}

export default Profile