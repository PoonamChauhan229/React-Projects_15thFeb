import React from 'react'
import Title from './Title'
import Button from './Button'
import { useContext } from 'react'
import { ThemeContext } from './context/theme-context'
const Blog = () => {
  const {theme,changeTheme}=useContext(ThemeContext)
  return (
    <div className='container p-1'>
    <Title text={`My Blog with ${theme} Theme`}/>    
    <span style={{position:"absolute",top:10,right:10}}>
    <Button 
    text={theme==="dark"?"Light":"Dark"}
    btnClass={`${theme==="dark" &&"btn-light"} me-2 px-4 btn-secondary`} 
    classes={" "}
    onClick={changeTheme}
/>
    </span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam iure explicabo, quos impedit voluptate illum odit provident rerum mollitia nam, eligendi architecto. Aut enim quae, voluptatem quos nulla iste neque placeat quo debitis veritatis mollitia ut corrupti optio earum minus numquam dolores quasi sapiente incidunt rem ducimus voluptates nisi.
    </p>
    </div>
  )
}

export default Blog