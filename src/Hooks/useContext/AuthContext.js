import React, {createContext, useState} from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const login = (username, password) => {
        if(username === "user" && password === "password"){
            setUser({username})
        }
        else{
            setUser(null)
        }
    }

    const logout = ()=>{
        setUser(null)
    }

    return(
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 