// import React from 'react'
// import './index.css';
// const Info = ({cityInfo}) => {
//    // console.log(cityInfo);
//   //  console.log("tfyf");

//    var date=new Date();

//    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//    var day=date.getDay();
//    var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
//    var month=date.getMonth();
//    var num=date.getDate();
//    var year=date.getFullYear();


//    let sec = cityInfo.sys.sunset;
//    let dates = new Date(sec * 1000);
//    let time = `${dates.getHours()}:${dates.getMinutes()}`;
   
//     return (
//       // {cityInfo.name}
//       // {cityInfo.main.temp}°C
//       // {cityInfo.weather[0].main}
//       // cityInfo.sys.country}
//       // days[day]}, {months[month]} {num}, {year}
//        <>
        

        
//         <div className="container">
           
//            <div className="cityName">{cityInfo.name}</div>
//            <div className="country">{cityInfo.sys.country}</div>
//            <div className="date">{days[day]}, {months[month]} {num}, {year}</div>
//            <div className="temp">{cityInfo.main.temp}°C</div>
//            <div className="desc">{cityInfo.weather[0].main}</div>
//         </div>




//         <div className="extra">
//         <div className="sunset">
//             <div className="two-columns">
//                 <p>
//                 <i className={"wi wi-sunset"}></i>
//                 </p>
//                 <p className="two-info">
//                     Sunset<br/>
//                     {time}

//                 </p>
//             </div>



//             <div className="two-columns">
//               <p>
//                 <i className={"wi wi-humidity"}></i>
//               </p>
//               <p className="two-info">
//               Humidity <br />
//                 {cityInfo.main.humidity}
//               </p>
//             </div>
//         </div>

//         <div className="weather-extra">
//             <div className="two-columns">
//               <p>
//                 <i className={"wi wi-rain"}></i>
//               </p>
//               <p className="two-info">
//               Pressure<br />
//               {/* {cityInfo.main.pressure} */}
//               </p>
//             </div>

//             <div className="two-columns">
//               <p>
//                 <i className={"wi wi-strong-wind"}></i>
//               </p>
//               <p className="two-info">
//               Speed <br />
//               {/* {cityInfo.wind.speed} */}
//               </p>
//             </div>
      
//           </div>

//         </div>

//        </>
//     )
// }

//  // "src": "logo192.png",
// //  "src": "logo512.png",


// export default Info
