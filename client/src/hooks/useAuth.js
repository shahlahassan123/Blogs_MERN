import React, {useContext} from 'react'
import { authContext } from '../Context/AuthProvider'

const useAuth = () => {
    const context = useContext(authContext)
        if (context === undefined) {
            throw new Error('Use Auth must be used within the Auth Provider')
        }
    return context;
}

export default useAuth
