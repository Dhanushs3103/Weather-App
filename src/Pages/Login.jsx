// Packages
import { FormControl,Stack,Avatar, FormLabel, Input, Button, Container,Text } from "@chakra-ui/react";
import { useReducer,useRef } from "react";
import axios from "axios";
import { useContext,useState } from "react";
import { Navigate } from "react-router-dom";


// local imports
import "../App.css";
import { AuthContext } from "../Contexts/AuthContext";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

let initialState = {
  email: "",
  password: ""
}

function reducer (state, action) {
   let {type, payload} = action;

   switch (type) {
    case "UPDATE_EMAIL": 
      return { ...state , email:payload};
    case "UPDATE_PASSWORD": 
      return { ...state , password:payload};
    case "RESET_VALUES":
      return { ...initialState };
    default:
      throw new Error(`Action type is invalid`);
   }
}

function Login() {

  const [shouldNavigate, setShouldNavigate] = useState(false);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [success, setSuccess] = useState(false);

  let {loginUser} = useContext(AuthContext);
  
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let [state, dispatch] = useReducer(reducer, initialState);

  let {email, password} = state;


  async function handleSubmit (e) {
    e.preventDefault();
    console.log("from submitted");
    setLoading(true);
    try {
      let res = await axios({
        method: "post",
        url : "https://reqres.in/api/login",
        data : {
          email: email,
          password: password,
        }
      })
      
      console.log(res);
      if (res.status === 200) {
        loginUser();
        setShouldNavigate(true);
        setSuccess(true);
      }
      else{
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }finally{
      dispatch({type:"RESET_VALUES"})
      setLoading(false);
    }
    
  }

  if (shouldNavigate) {
    return <Navigate to="/weather" />
  }
  
  
  return (
<>
     <div style={{ backgroundImage: `url('https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     {loading && (<Loading/>)}
     {success && (<Success/>)}
     {error && (<Error/>)}
      <Container maxW="450px" borderRadius={"20px"} border={"1px solid gray"} backdropFilter="blur(10px)" p="3" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Stack direction='row'mb={4} gap={"10px"} p={2}>
       <Avatar src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png'/>
       <Text mt={1} fontSize={"25px"} fontWeight={"bold"} fontFamily= "Ubuntu, sans-serif" >WeatherWise</Text>
       </Stack>
       <form onSubmit={handleSubmit}>
       <FormControl>
          <FormLabel fontSize="25px"  color={"#333333"}  fontWeight={"bold"} >Email </FormLabel>
          <Input type='email'  fontSize="20px" mt={"10px"}  className="inputStyle" size={"lg"} value={email}  bg={"none"} color={"#333333"} border={"1px solid black"} ref={emailRef} onChange={(e)=>{
            dispatch({type:"UPDATE_EMAIL", payload:e.target.value})
          }} placeholder="Enter Email" />
        </FormControl>
        <FormControl m="20px 0">
          <FormLabel fontSize="25px" color={"#333333"} fontWeight={"bold"} >Password</FormLabel>
          <Input type='password' mt={"10px"}  fontSize="20px" bg={"none"} value={password} color={"#333333"} onChange={(e)=>{
            dispatch({type: "UPDATE_PASSWORD" , payload: e.target.value})
          }} border={"1px solid black"} placeholder="Enter password" className="inputStyle"  size={"lg"} ref={passwordRef}/>
        </FormControl>
        <Button w="300px" mt={"10px"} p={"25px"} fontSize={"20px"} color={"#FFFFFF"}  type="submit" bg="#3559E0" fontWeight={"bold"} _hover={{ bg: "#1640D6" }} justifyContent="center"> Login </Button>
       </form>
       <Text fontSize={"20px"} mt={"20px"}  color={"#333333"} ml={"200px"}>*use reqres.in credential</Text>
      </Container>
    </div>
    </>
  );
}

export default Login;
