import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function infoBox({ info } )
{

    return(
      <div className="InfoBox">
        <h3>WeatherInfo</h3>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color='text.secondary' component={"span"}>
          <p>Feels like={info.feelsLike}&deg;C</p>
          <p>Temp Min={info.tempMin}&deg;C</p>
          <p>Temp Max={info.tempMax}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Weather={info.weather}</p>
          <p>Temparature={info.temp}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
    );

}