 import React,{useState} from 'react';
 import './index.css';
 import Mist from "./images/mist.jpg";
 import Sunny from "./images/sunny.jpg";
 import Clear from "./images/clear.jpg";
 import Fog from "./images/fog.jpg";
 import Rain from "./images/rain.jpg";
 import Snow from "./images/snow.jpg";
 import Overcast from "./images/overcast.jpg";
 import Cloudy from "./images/cloudy.jpg";

const App = () => {
  const [searchCity,setSearchCity] =useState('delhi');
  const [cityInfo,setCityInfo]=useState({});
  


  const Fetch = async () =>{
    let response=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=c44850806df28add00cfc1c7148bf695`)
    let data = await response.json();
    console.log(data);
    setCityInfo(data);

    setSearchCity("");
  }


  var date=new Date();

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day=date.getDay();
  var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var month=date.getMonth();
  var num=date.getDate();
  var year=date.getFullYear();

  let sec = cityInfo.sys.sunset;
  let dates = new Date(sec * 1000);
  let time = `${dates.getHours()}:${dates.getMinutes()}`;

  // useEffect(() => {
  //   Fetch();
  // }, []);
 
  return (

    <>
       <div className="app" style={ 
         cityInfo.weather[0].main==="Mist"? {backgroundImage: `url(${Mist})` } 
                                      : cityInfo.weather[0].main?.includes("Cloud")
                                      ? { backgroundImage: `url(${Cloudy})` }
                                      : cityInfo.weather[0].main?.includes("Clear")
                                      ? { backgroundImage: `url(${Clear})` }
                                      : cityInfo.weather[0].main?.includes("Rain")
                                      ? { backgroundImage: `url(${Rain})` }
                                      : cityInfo.weather[0].main?.includes("Snow")
                                      ? { backgroundImage: `url(${Snow})` }
                                      : cityInfo.weather[0].main?.includes("Sunny")
                                      ? { backgroundImage: `url(${Sunny})` }
                                      : cityInfo.weather[0].main?.includes("Fog")
                                      ? { backgroundImage: `url(${Fog})` }
                                      : { backgroundImage: `url(${Overcast})` }
                                      

      }> 

     
    <div className="search">
      <input type = "search"
       placeholder="Search your city...."
       autoFocus
       value={searchCity}
       onChange={(e) => setSearchCity(e.target.value)}
        
      />
      
       <button className="searchButton"onClick={Fetch}>Search</button>
    </div>

     <div className="container">
           
           <div className="cityName">{cityInfo.name}</div>
           <div className="country">{cityInfo.sys.country}</div>
           <div className="date">{days[day]}, {months[month]} {num}, {year}</div>
           <div className="temp">{cityInfo.main.temp}°C</div>
           <div className="desc">{cityInfo.weather[0].main}</div>
        </div> 

        <div className="extra">
        <div className="sunset">
            <div className="two-columns">
                <p>
                <i className={"wi wi-sunset"}></i>
                </p>
                <p className="two-info">
                    Sunset<br/>
                    {time}

                </p>
            </div>

            <div className="two-columns">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="two-info">
              Humidity <br />
                {cityInfo.main.humidity}
              </p>
            </div>
        </div>

        <div className="weather-extra">
            <div className="two-columns">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="two-info">
              Pressure<br />
              {cityInfo.main.pressure}
              </p>
            </div>

            <div className="two-columns">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="two-info">
              Speed <br />
              {cityInfo.wind.speed}
              </p>
            </div>
      
          </div>

        </div>
   
    </div>
    </>
  )
}

export default App
