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
        <div className="weatherResultContainer">
            <div className="basicInfoContainer">
                <div className="cityInfo">
                    <h2>{location.name}</h2>
                    <h3>{location.region}</h3>
                    <p>{dateTime.toLocaleDateString('en-AU', options)}</p>
                </div>

                <div className='currentWeather'>
                    <div className="currentWeatherDescriptionContainer">
                        <img src = {weather.condition.icon} alt =''/>
                        <p className="weatherDescription">{weather.condition.text}</p>
                    </div>
                    <ul className="currentWeatherDetails">
                        <li>
                            <p>Temp: {weather.temp_c} °C</p>
                        </li>
                        <li>
                            <p>Wind: {weather.wind_kph} km/hr</p>
                        </li>
                        <li>
                            <p>Pressure: {weather.pressure_mb} mbar</p>
                        </li>
                        <li>
                            <p>Humidity: {weather.humidity} %</p>
                        </li>
                    </ul>
                </div>
                
            </div>
            

            { airQualityData && <AirQualityResult airQuality={airQualityData}/>}
        </div>
    );
};

export default WeatherResult;