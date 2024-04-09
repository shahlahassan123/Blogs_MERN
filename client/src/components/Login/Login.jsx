import React, {useState} from 'react'
import './Login.css'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [user,setUser] = useState({email:"",password:""})
    const auth = useAuth()

    const formValid = user =>{
      return user.email && user.password
    }

    const handleSubmit  = (e) =>{
      e.preventDefault()
      console.log(user);
      console.log('Form submitted')
      if(formValid(user)){
        auth.loginAction(user)
      }
    }
  
    const handleInputChange = (e) =>{
      const {name, value} = e.target;
      setUser(prevValue=>({...prevValue,[name]:value}))
  
    }
  
    return (
      <div className='login'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email: </label>
              <input type="email" id="username" name="email" onChange={handleInputChange}/><br/>
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" name="password" onChange={handleInputChange}/><br/>
              <button type="submit">Submit</button>
          </form>
        
      </div>
    )
}

export default Login
