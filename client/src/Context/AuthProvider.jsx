import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import useToken from '../hooks/useToken'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL

export const authContext = createContext(undefined)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const {token,setToken} = useToken()
    const navigate = useNavigate()

    const loginAction = async(cred) =>{
        try{
            let res = await axios.post( BASE_URL + 'auth/login', cred)
            console.log("Authentication", res.data)
            setToken(res.data.token)
            setUser(res.data.userID)
            navigate("/")

        }catch(err){
            console.log(err)
        }
    }

    const registerAction = async(cred) =>{
        try{
            let res = await axios.post( BASE_URL + 'auth/register', cred)
            console.log("Register Authentication", res.data)
            setToken(res.data.token)
            setUser(res.data.userID)
            navigate("/")

        }catch(err){
            console.log(err)
        }
    }




    const logoutAction = ()=>{
        console.log("Logged out")
        setUser(null)
        setToken(null)
        navigate("/login")
        // window.location.href = "/login";
    }

    const authContextValue ={
        user,
        token,
        loginAction,
        logoutAction,
        registerAction
    }

  return (
    <authContext.Provider value={authContextValue}>
        {children}
    </authContext.Provider>  )
}

export default AuthProvider
