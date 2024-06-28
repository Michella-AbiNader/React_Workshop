import React, {createContext, useState} from "react";

//tocreate our own context:it becomse a Provider and is used such as react-counter-dom(wedon't import it,weimportfromit)

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    }
    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;