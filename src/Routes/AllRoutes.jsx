// Packages
import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";


// Local Imports
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Weather from '../Pages/Weather'
import PrivateRoute from '../Routes/PrivateRoute'
import NotFoundPage from '../Pages/NotFoundPage'

export default function AllRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.match(/\/{2,}/)) {
      navigate(location.pathname.replace(/\/{2,}/g, "/"), { replace: true });
    }
  }, [location, navigate]);
  return (
     <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/weather" element={<PrivateRoute><Weather /></PrivateRoute>} />
      <Route path="*" element={<NotFoundPage />} />
     </Routes>
     </>
  )
}
