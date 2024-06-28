import React from 'react'
import { ThemeProvider } from '../Hooks/useContext/ThemeContext'
import Button from '../Hooks/useContext/Button'
import { AuthProvider } from '../Hooks/useContext/AuthContext'
import Profile from '../Hooks/useContext/Profile'


function UseContext() {
  return (
    <div>
        <ThemeProvider>
            <Button/>
        </ThemeProvider>

        <AuthProvider>
          <Profile/>
        </AuthProvider>
    </div>
  )
}

export default UseContext