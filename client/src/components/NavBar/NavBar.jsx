import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import useAuth from "./../../hooks/useAuth"
import {ThemeContext} from "../../Context/ThemeProvider"
import { useContext } from 'react'

const NavBar = () => {

  const auth = useAuth()

  const [lightMode, setLightMode] = useContext(ThemeContext)
 
  const hangleThemeChange =(e) =>{
    const isChecked = e.target.checked;
    document.body.classList.toggle("dark-theme", isChecked)
    setLightMode(!lightMode);
  }

  const LinkStyle ={color : lightMode ?  "#111" : "#fff" }


  return (
    <div className='Navbar' style={{color : lightMode ? "#111" : "#fff"  }}>

      <Link style={LinkStyle} to="/">Home</Link>

      {auth.user && <Link to="/create-blog" style={LinkStyle}>Create a blog</Link>}

      {!auth.user && <Link to="/login" style={LinkStyle}>Login</Link>}

      {!auth.user && <Link to="/register" style={LinkStyle}>Register</Link>}

      {auth.user && <Link style={LinkStyle} onClick={() => auth.logoutAction()}>Logout</Link>}



      <div className='toggle'>
        <input type='checkbox' id="checkbox" className='toggleBtn' onChange ={hangleThemeChange}/>
          <label htmlFor="checkbox" className='toggleBtnLabel'>
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className='ball'></span>
          </label>
       
      </div>

    </div>
  )
}

export default NavBar


