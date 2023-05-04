import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'

const LightAndDarkMode = () => {
  const [theme,setTheme]=useState(themes.light)
  
  function changeTheme(){
    console.log("Theme Changed")
    theme===themes.light?setTheme(themes.dark):setTheme(themes.light)
    //setTheme(themes.dark)
  }
  useEffect(()=>{
    let docBody=document.body;
    if(theme==themes.light){
      docBody.classList.remove("bg-dark")
      docBody.classList.remove("text-light")
      docBody.classList.add("bg-light")
      docBody.classList.add("text-dark")
      
    }
    else{
      docBody.classList.remove("bg-light")
      docBody.classList.remove("text-dark")
      docBody.classList.add("bg-dark")
      docBody.classList.add("text-light")
    }
  },[theme])
  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
        <Blog/>        
    </ThemeContext.Provider>
  )
}

export default LightAndDarkMode