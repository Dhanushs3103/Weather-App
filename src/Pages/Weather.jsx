// packages
import { Input,Stack,Grid, GridItem,Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useState,useContext } from 'react'
import axios from 'axios'

// Local Imports
import Navbar from '../components/Navbar'
import "../App.css"
import '../App.css'
import Bengaluru from '../components/Bengaluru'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import { AuthContext } from '../Contexts/AuthContext'

export default function Weather() {

  let {login} = useContext(AuthContext)

  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(false)
  let [status,setStatus] = useState(true)
  let [noPage, setNoPage] = useState(false)
  let [search, setSearch] = useState("");
  let [weather, setWeather] = useState({});
  let [sunRise, setSunRise] = useState("");
  let [sunSet, setSunSet] = useState("");

  let API_KEY = "a4dcbbb5448759a4280c99c54f96ed02"
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search},&appid=${API_KEY}&units=metric`;

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
let mistImg = "https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
 
  async function handleSearch(){
    setStatus(false);
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: url
      })
      console.log(res.data);
      setWeather(res.data)
      let sunRiseTime = new Date(res.data.sys.sunrise * 1000).toLocaleTimeString();
      let sunSetTime = new Date(res.data.sys.sunset * 1000).toLocaleTimeString();
      setSunRise(sunRiseTime);
      setSunSet(sunSetTime);
      setNoPage(false);
      
    } catch (error) {
      console.log(error);
      setNoPage(true);
      setError(true);
    }finally{
      setLoading(false);
      setStatus(false);
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
    }else if (mainImg === "Mist") {
      return mistImg
    }
  }


  return (
    <>
    <div style={{ backgroundImage: `url('https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg')`, backgroundSize:"cover", backgroundPosition: 'center', width: '100vw', height: '100vh'}}>
      <Navbar/>
      <Stack className='search-bar' direction={"row"} h={"fit-content"}  margin={"auto"} justifyContent={"center"}>
      <Input className='search-input' size={"lg"} p={"30px 20px"} onChange={(e) => setSearch(e.target.value)} placeholder='Search Your Location' width='400px' />
      <Search2Icon className='search-icon' onClick={handleSearch}/>
      </Stack>
      {loading && <Loading />} 
      {error && <Error />} 
      {noPage ? (
        <Text color={"#FFFFFF"} fontSize={"50px"} fontWeight={"bold"} marginTop={"100px"} textAlign={"center"}>No Data Found</Text>
      ):( 
        status ? (<Bengaluru/>) : (
          <div style={{textAlign:"center"}} >
          <Grid h='400px'  templateRows='repeat(2, 1fr)' w={"800px"} margin={"auto"}  mt={"50px"} templateColumns='repeat(5, 1fr)' gap={4}>
              {/* left */}
           <GridItem backdropFilter={"blur(40px)"} height={"100%"}  w="300px" rowSpan={2} borderRadius={"40px"} >
            <img src={imageChecker(weather.weather?.[0].main)} alt={weather.weather?.[0].main} style={{width:"200px", height:"200px" ,marginLeft:"50px", padding:"10px",border:"none"}} />
            <Text fontSize={"40px"} color={"#FFFFFF"} fontWeight={"bold"}>{weather.weather?.[0].main}</Text>
            <Text fontSize={"60px"} color={"#FFFFFF"} fontWeight={"bold"}>{weather.main?.temp}<span className='celsius'>C</span></Text>
           </GridItem>
           {/* city and wind */}
           <GridItem  backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
            <Text fontSize={"30px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}> {weather.name}</Text>
            <Stack direction={"row"} mt={"20px"} ml={"20px"}>
              <img src={windyImg} alt={weather.wind?.speed} style={{width:"80px", height:"80px"}} />
            <Text fontSize={"20px"} color={"#FFFFFF"} mt={"20px"} fontWeight={"bold"}>{weather.wind?.speed} m/s</Text>
            </Stack>
           </GridItem>
           {/* Max and min Temperature */}
           <GridItem backdropFilter={"blur(40px)"} colSpan={2} borderRadius={"40px"}>
              {/* max */}
           <Stack direction={"row"} mt={"20px"} >
              <img src={maxTemp} alt="maxTemp" style={{width:"50px", height:"50px", marginLeft:"50px"}} />
            <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} ml={"10px"}  fontWeight={"bold"}>{weather.main?.temp_max} <span style={{fontSize:"17px"}}>C</span></Text>
            </Stack>
            {/* min */}
            <Stack direction={"row"} mt={"20px"} >
              <img src={minTemp} alt="minTemp" style={{width:"60px", height:"60px", marginLeft:"40px"}} />
            <Text fontSize={"25px"} color={"#FFFFFF"} mt={"20px"} ml={"10px"}fontWeight={"bold"}>{weather.main?.temp_min} <span style={{fontSize:"17px"}}>C</span></Text>
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
      )}
    </div>

    </>
      )
}
