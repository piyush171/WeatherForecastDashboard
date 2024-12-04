import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SearchBox({updateInfo}){
    let[city, setCity]= useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_Key="1945cae382b6fd372a438bdc27c556e8";
    
    
    let getWeatherInfo = async () => {
      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
      let jsonResponse= await response.json();
      console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;

    };

    
    let handleChange = (evt) =>{
        setCity(evt.target.value);

        
    };
      let handleSubmit = async(evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);

      };
        return(
        <div className="SearchBox">
            
            <h3>Search for the venue</h3>
              <form onSubmit={handleSubmit}>
              <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br></br><br></br>
              <Button variant="contained" type='submit'>Search</Button>
              </form>
            </div>
    );
}














