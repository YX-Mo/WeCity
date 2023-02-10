import AirQualityResult from './AirQualityResult/AirQualityResult';
import './WeatherResult.css';
import './AirQualityResult/AirQualityResult'

const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
}

const WeatherResult =(props) => {
    const location = props.weatherData.location;
    const weather = props.weatherData.current;
    const dateTime = new Date(location.localtime);
    const airQualityData = props.weatherData.current.air_quality;


    return (
        <div>
            <div>
                <h2>{location.name}, {location.region}</h2>
                <p>{dateTime.toLocaleDateString('en-AU', options)}</p>
            </div>

            <ul className='weatherList' >
                <li>
                    <img src = {weather.condition.icon} alt =''/>
                    <p>{weather.condition.text}</p>
                </li>
                <li>
                    <p>Temp: {weather.temp_c} °C</p>
                </li>
                <li>
                    <p>Wind: {weather.wind_kph} km/hr</p>
                </li>
            </ul>
            { 
            airQualityData && <AirQualityResult airQuality={airQualityData}/>}
        </div>
    );
};

export default WeatherResult;