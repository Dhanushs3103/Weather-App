// Packages
import { Flex,Text, Button } from '@chakra-ui/react'

// local imports
import Navbar from '../components/Navbar'
import "../App.css"

export default function Home() {
  return (
     <div style={{ backgroundImage: `url('https://images.pexels.com/photos/12544943/pexels-photo-12544943.jpeg')`, backgroundSize:"cover", backgroundPosition: 'center', width: '100vw', height: '100vh'}}>
     {/* Navbar */}
      <Navbar/>
      {/* Main */}
      <Flex direction={"column"} mt={"80px"}>
        <Text marginLeft={"50px"} color={"#333333"} fontSize={"60px"} fontWeight={"bold"}>Ready to Explore <br/><span style={{color:"#4358f6"}}>the Weather</span>?</Text>
        <Text  marginLeft={"50px"}  color={"#333333"}  fontSize={"60px"} fontWeight={"bold"}>Start Your Journey Here!</Text>
      </Flex>
      <a href="/weather"><Button marginLeft={"50px"} bg={"#4358f6"} color={"#FFFFFF"} mt={"20px"} p={"30px 70px"}fontSize={"20px"} fontWeight={"bold"} fontFamily={"Ubuntu, sans-serif"} _hover={{bg:"#1D24CA"}}>Get Started</Button></a>
     </div>
  )
}
