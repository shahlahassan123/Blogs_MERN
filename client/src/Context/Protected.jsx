import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Protected = () => {
    const {token} = useAuth()
    if (!token) {
       return <Navigate to="login"></Navigate>
    }

  return <Outlet />
}

export default Protected
