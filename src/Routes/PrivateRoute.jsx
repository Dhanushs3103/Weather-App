// Packages
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

// local imports
import { AuthContext } from '../Contexts/AuthContext'

export default function PrivateRoute({children}) {

    let {login} = useContext(AuthContext);
    if (!login) {
        return <Navigate to="/login" />
    }

  return (
    <>
      {children}
    </>
  )
}
