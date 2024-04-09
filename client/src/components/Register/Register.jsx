import React, {useState} from 'react'
import "./Register.css"
import useAuth from '../../hooks/useAuth'

const Register = () => {

 const [user,setUser] = useState({fullname:"",email:"",password:""})
 const auth = useAuth()

 const formValid = user =>{
  return user.email && user.password && user.email
}

  const handleSubmit  = (e) =>{
    e.preventDefault()
    console.log(user);
    console.log('Register Form submitted')
    if(formValid(user)){
      auth.registerAction(user)
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setUser(prevValue=>({...prevValue,[name]:value}))

  }

  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name: </label>
            <input type="text" id="fullname" name="fullname" onChange={handleInputChange}/><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="username" name="email" onChange={handleInputChange}/><br/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" onChange={handleInputChange}/><br/>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Register
