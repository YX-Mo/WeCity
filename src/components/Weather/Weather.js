import './Weather.css';
import {useState} from 'react';
import SearchCity from './SearchCity/SearchCity';
import Spinner from '../Spinner/Spinner';
import Card from 'react-bootstrap/Card';
import WeatherResult from './WeatherResult/WeatherResult';


const Weather = (props)=> {

    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState();



    const onSearch = (weatherData)=>{
        setWeather(weatherData);
    }

    return(
        <Card className="text-center">
            <Card.Header>
                <h1>Weather App☀️</h1>
            </Card.Header>
            <Card.Body>
                <SearchCity search={onSearch} setIsLoading={setIsLoading}/>
                {isLoading? <Spinner/> : weather && <WeatherResult weatherData={weather}/>}
            </Card.Body>
            <Card.Footer className="text-muted">By Yunxun</Card.Footer>
        </Card>  
    )
}


export default Weather;

