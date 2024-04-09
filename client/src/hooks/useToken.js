import React from 'react'
import { useState } from 'react'

const TOKEN = 'secret'

const useToken = () => {
    const getToken = ()=>{
        const token = localStorage.getItem(TOKEN)
        return token
    }
  
    const [token, setToken] = useState(getToken())

    const saveToken = (data) =>{
        if(!data){
            localStorage.removeItem(TOKEN)
        }else{
            localStorage.setItem(TOKEN, data)
            setToken(data)
        }
    }

    return {
        token,
        setToken : saveToken
    }



  
}

export default useToken
