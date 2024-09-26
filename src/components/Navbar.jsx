// Packages
import React from 'react'
import { Flex, Avatar, Text, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// local imports
import "../App.css"
import { AuthContext } from '../Contexts/AuthContext'

export default function Navbar() {
  let navigate = useNavigate();
  let {handleLogout,login} = useContext(AuthContext);
  
  return (
    <>
       <Flex backdropFilter="blur(20px)" justifyContent={"space-between"}  p={"10px 20px"} boxShadow ="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" >
       <Stack direction='row'>
       <Avatar src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png' cursor={"pointer"} onClick={() => navigate("/")}/>
       <Text mt={2} fontSize={"20px"} fontWeight={"bold"} fontFamily= "Ubuntu, sans-serif" >WeatherWise</Text>
       </Stack>
      <Stack direction='row' color={"#333333"} gap={"50px"} mr={"20px"} mt={2} fontFamily={"Ubuntu, sans-serif"} fontSize={"20px"} fontWeight={"500"}>
        <Link to={"/"} className='linkStyle' >Home</Link>
        <Link to={"/weather"} className='linkStyle' >Weather</Link>
        {login === true ? (
            <span className="linkStyle" style={{cursor:"pointer"}} onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <>
              <span className="linkStyle">
                <Link to={"/login"}>Login</Link>
              </span>
              <span className="linkStyle">
                <Link to={"/register"}>Register</Link>
              </span>
            </>
          )}
      </Stack>
      </Flex>
    </>
  )
}
