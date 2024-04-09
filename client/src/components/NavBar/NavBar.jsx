import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import useAuth from "./../../hooks/useAuth"

const NavBar = () => {

  const auth = useAuth()




  return (
    <div className='Navbar'>

        <Link to="/">Home</Link>

        {auth.user &&  <Link to="/create-blog">Create a blog</Link> }

        {!auth.user &&  <Link to="/login">Login</Link>}

        {!auth.user &&   <Link to="/register">Register</Link>}
       
        {auth.user &&   <Link onClick={()=>auth.logoutAction()}>Logout</Link>   }
             
    </div>
  )
}

export default NavBar
