import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
        <button style = {{backgroundColor: theme==="light"?"#fff":"#333", color:theme==="light"? "#333": "#fff"}} 
            onClick = {toggleTheme}>
            Toggle Theme
        </button>
    </div>
  )
}
