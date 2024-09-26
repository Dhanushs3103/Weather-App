import React, { useState, useContext } from "react";
import { Spinner } from "@chakra-ui/react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import {AuthContext} from "../Contexts/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

// Base URL
let URL = `https://weather-app-backend-4hgb.onrender.com`;

function Register() {
  let toast = useToast();
  let navigate = useNavigate();
  let { handleLogin } = useContext(AuthContext);
  let [loading, setLoading] = useState(false);
  let [details, setDetails] = useState({
    email: "",
    password: "",
    userName: "",
    gender: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Validate fields
    if (
      !details.email ||
      !details.password ||
      !details.userName ||
      !details.gender
    ) {
      setLoading(false);
      return toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }

    try {
      // Making the post request
      let res = await axios({
        method: "POST",
        url: `${URL}/api/auth/register`,
        data: details,
      });

      if (res.data.message === "User already exists") {
        setLoading(false);
        setDetails({
          email: "",
          password: "",
          userName: "",
          gender: "",
        });
        // Display error toast
        return toast({
          title: "User already exists with this email",
          description: "please login",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }

      // Check for successful registration
      if (res.status === 201) {
        setLoading(false);
        // Reset form
        setDetails({
          email: "",
          password: "",
          userName: "",
          gender: "",
        });
        //setting the login state
        handleLogin();
        // Display success toast
        toast({
          title: "Registered successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        //navigate to todos
        setTimeout(() => {
          navigate("/weather");
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      setDetails({
        email: "",
        password: "",
        userName: "",
        gender: "",
      });
      toast({
        title: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        w={{ base: "90%", md: "70%", lg: "50%" }}
        p={4}
        mx="auto"
        mt={5}
        bg={"white"}
        borderRadius={"10px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Text fontSize={"2xl"} textAlign={"center"}>
          Register
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex direction="column">
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <Input
                value={details.userName}
                onChange={(e) =>
                  setDetails({ ...details, userName: e.target.value })
                }
                type="text"
                placeholder="Enter username"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select gender"
                value={details.gender}
                onChange={(e) =>
                  setDetails({ ...details, gender: e.target.value })
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              <Link to="/login">Already have an account?</Link>
            </span>
            <Button
              type="submit"
              colorScheme="teal"
              variant="solid"
              isDisabled={loading} // Disable the button when loading
            >
              {loading ? (
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              ) : (
                "Register"
              )}
            </Button>
          </Flex>
        </form>
      </Box>
      <Button colorScheme="teal" size="lg" mt={4} onClick={() => navigate("/")}>
        Home Page
      </Button>
    </div>
  );
}

export default Register;
