 import React,{useState,useEffect} from 'react';
 import Info from './Info';

 import './index.css';

 import Mist from "./images/mist.jpg";
import Sunny from "./images/sunny.jpg";
const App = () => {
  const [searchCity,setSearchCity] =useState('delhi');
  const [cityInfo,setCityInfo]=useState({});
  //  const [value,setValue]=useState({});

  // const Fetch = () =>  {
  //    fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=c44850806df28add00cfc1c7148bf695`
  //   )
  //     .then((response) => response.json())
  //     .then(data => console.log(data))
  //     .then(data => 
  //       setCityInfo(data)
        
  //       );
  //   };


  const Fetch = async () =>{
    let response=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=c44850806df28add00cfc1c7148bf695`)
    let data = await response.json();
    console.log(data);
    setCityInfo(data);

    setSearchCity("");
  }

  useEffect(() => {
    Fetch();
  }, []);
 
  return (
    <>
  
   {/* <div className={(typeof cityInfo != "undefined") ? ((cityInfo.main.temp > 0) ? 'warm' : 'app') : 'app'}>
</div>  */}
      {/* <div className="app" style={ 
         cityInfo.weather[0].main==="Mist"? {backgroundImage: `url(${Mist})` } : { backgroundImage: `url(${Sunny})` }
      }> */}

     
    <div className="search">
      <input type = "search"
       placeholder="Search your city...."
       autoFocus
       value={searchCity}
       onChange={(e) => setSearchCity(e.target.value)}
      />
       <button className="searchButton"onClick={Fetch}>Search</button>
    </div>
   
   
    { <Info cityInfo = {cityInfo}/> }
    {/* </div> */}
    </>
    
  )
}

export default App
