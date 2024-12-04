import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
 const[weatherInfo, setWeatherInfo]=useState({
   city: "Delhi" ,
   temp:25.5,
   feelsLike: 24.08,
   tempMin: 24.25 ,
   tempMax: 25.05,
   humidity:  27.05 ,
   weather: "haze",

 });

 let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
 };

    return(
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}
