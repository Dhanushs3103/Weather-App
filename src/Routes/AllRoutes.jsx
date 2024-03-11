// Packages
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Local Imports
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Weather from '../Pages/Weather'
import PrivateRoute from '../Routes/PrivateRoute'

export default function AllRoutes() {
  return (
     <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/weather" element={<PrivateRoute><Weather /></PrivateRoute>} />
     </Routes>
     </>
  )
}
