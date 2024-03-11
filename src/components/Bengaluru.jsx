// packages
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Grid, GridItem,Text,Stack } from '@chakra-ui/react'

// local imports

import '../App.css'

let API_KEY = "a4dcbbb5448759a4280c99c54f96ed02"
let url = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,&appid=${API_KEY}&units=metric`

let cloudImg = "https://cdn-icons-png.freepik.com/512/5903/5903939.png";
let clearImg= "https://cdn-icons-png.freepik.com/512/1400/1400310.png";
let rainImg = "https://cdn-icons-png.freepik.com/512/4150/4150897.png";
let showerImg = "https://cdn-icons-png.freepik.com/512/3937/3937493.png"
let thunderImg = "https://cdn-icons-png.freepik.com/512/1959/1959334.png";
let snowImg = "https://cdn-icons-png.freepik.com/512/6221/6221304.png";
let partlycouldyImg = "https://cdn-icons-png.freepik.com/512/9579/9579443.png";
let windyImg = "https://cdn-icons-png.freepik.com/512/3104/3104631.png";
let hazeImg = "https://cdn-icons-png.flaticon.com/512/4151/4151022.png";
let smokeImg = "https://cdn-icons-png.freepik.com/512/4414/4414055.png";
let maxTemp = "https://cdn-icons-png.freepik.com/512/5247/5247725.png";
let minTemp = "https://cdn-icons-png.freepik.com/512/10752/10752743.png";
let sunriseImg = "https://cdn-icons-png.freepik.com/512/9231/9231550.png";
let sunsetImg = "https://cdn-icons-png.freepik.com/512/577/577600.png";

export default function Bengaluru() {

    let [bengaluru, setBengaluru] = useState({})
    let [sunRise, setSunRise] = useState("");
    let [sunSet, setSunSet] = useState("");
 
  async function bengaluruTemp() {
      try {
        let res = await axios({
          method: "get",
          url: url
        })
        console.log(res.data);
        setBengaluru(res.data)
        let sunRiseTime = new Date(res.data.sys.sunrise * 1000).toLocaleTimeString();
        let sunSetTime = new Date(res.data.sys.sunset * 1000).toLocaleTimeString();
        setSunRise(sunRiseTime);
        setSunSet(sunSetTime);
      } catch (error) {
        console.log(error);
      }
  }

  function imageChecker(mainImg) {
    if (mainImg === "Clouds") {
      return cloudImg
    } else if (mainImg === "Clear") {
      return clearImg
    } else if (mainImg === "Rain") {
      return rainImg
    } else if (mainImg === "Shower rain") {
      return showerImg
    } else if (mainImg === "Thunderstorm") {
      return thunderImg
    } else if (mainImg === "Snow") {
      return snowImg
    } else if (mainImg === "Partly cloudy") {
      return partlycouldyImg
    } else if (mainImg === "Windy") {
      return windyImg
    } else if (mainImg === "Haze") {
      return hazeImg
    }else if (mainImg === "Smoke") {
      return smokeImg
    }
  }

  useEffect(() => {
    bengaluruTemp()
  },[])

  return (
    <div style={{textAlign:"center"}} >
    <Grid h='400px'  templateRows='repeat(2, 1fr)' w={"800px"} margin={"auto"}  mt={"50px"} templateColumns='repeat(5, 1fr)' gap={4}>
        {/* left */}
     <GridItem backdropFilter={"blur(40px)"} height={"100%"} w="300px" rowSpan={2} borderRadius={"40px"} >
      <img src={imageChecker(bengaluru.weather?.[0].main)} alt={bengaluru.weather?.[0].main} style={{width:"200px", height:"200px" ,marginLeft:"50px", padding:"10px"}} />
      <Text fontSize={"40px"} color={"#FFFFFF"} fontWeight={"bold"}>{bengaluru.weather?.[0].main}</Text>
      <Text fontSize={"60px"} color={"#FFFFFF"} fontWeight={"bold"}>{bengaluru.main?.temp}<span className='celsius'>C</span></Text>
     </GridItem>
     {/* city and wind */}
     <GridItem  backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
      <Text fontSize={"30px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}> {bengaluru.name}</Text>
      <Stack direction={"row"} mt={"20px"} ml={"20px"}>
        <img src={windyImg} alt={bengaluru.wind?.speed} style={{width:"80px", height:"80px"}} />
      <Text fontSize={"20px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}>{bengaluru.wind?.speed} m/s</Text>
      </Stack>
     </GridItem>
     {/* Max and min Temperature */}
     <GridItem backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
        {/* max */}
     <Stack direction={"row"} mt={"20px"} >
        <img src={maxTemp} alt="maxTemp" style={{width:"50px", height:"50px", marginLeft:"50px"}} />
      <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} ml={"10px"}  fontWeight={"bold"}>{bengaluru.main?.temp_max} <span style={{fontSize:"17px"}}>C</span></Text>
      </Stack>
      {/* min */}
      <Stack direction={"row"} mt={"20px"} >
        <img src={minTemp} alt="minTemp" style={{width:"60px", height:"60px", marginLeft:"40px"}} />
      <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} ml={"10px"}fontWeight={"bold"}>{bengaluru.main?.temp_min} <span style={{fontSize:"17px"}}>C</span></Text>
      </Stack>
     </GridItem>
     {/* sunRise */}
     <GridItem backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
     <Stack direction={"column"} mt={"20px"} ml={"10px"}>
        <img src={sunriseImg} alt="SunRise" style={{width:"90px", height:"90px", marginLeft:"60px"}} />
      <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}>{sunRise}</Text>
      </Stack>
     </GridItem>
     {/* SunSet */}
     <GridItem backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
     <Stack direction={"column"} mt={"20px"} ml={"10px"}>
        <img src={sunsetImg} alt="sunSet" style={{width:"90px", height:"90px", marginLeft:"60px"}} />
      <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}>{sunSet}</Text>
      </Stack>
     </GridItem>
    </Grid>
    </div>
  )
}
