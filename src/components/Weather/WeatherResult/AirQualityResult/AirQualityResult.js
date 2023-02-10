import './AirQualityResult.css'

const toFixedTwoFractionDigits = (value) => {
    return Number.parseFloat(value).toFixed(2);
}

const AirQualityResult = (props) => {
    console.log('rendering aqi');
    return(
        <div>
        <h3>Air Quality</h3>
        <ul>
            <li>CO2: 
                <p>
                    {`CO2: ${toFixedTwoFractionDigits(props.airQuality.co)}`}
                </p>
            </li>
            <li>
                <p>
                    {`NO2: ${toFixedTwoFractionDigits(props.airQuality.no2)}`}
                </p>
            </li>
            <li>
                <p>
                    {`PM2.5: ${toFixedTwoFractionDigits(props.airQuality.pm2_5)}`}
                </p>
            </li>
            <li>
                <p>
                    {`PM10: ${toFixedTwoFractionDigits(props.airQuality.pm10)}`}
                </p>
            </li>
        </ul>
    </div>
    )
    
}

export default AirQualityResult;