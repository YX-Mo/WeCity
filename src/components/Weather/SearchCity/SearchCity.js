
import {useState} from 'react';
import { fetchWeatherByCity } from '../../../services/weatherService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './SearchCity.css';



const SearchCity = (props)=> {
    const [city, setCity] = useState('');
    const [showAirQuality,setShowAirQuality] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [error, setError] = useState('');

    const onCityInputChangeHandler = (e) => {
        const value = e.target.value;
        setCity(value);
        setError('');
        if (value.length >= 2){
            setIsFormValid(true);
        }else {
            setIsFormValid(false);
        }
    }

    const onSearchCityHandler = async (event) => {
        event.preventDefault();
        if(!city) {
            //todo: error
            return;
        }

        try {
            props.setIsLoading(true);
            const weatherData = await fetchWeatherByCity(city, showAirQuality);
            props.search(weatherData);
            
        } catch (error) {
            console.log('Failed to fetch city weather due to error: ', error)
            setError(error.message);
        } finally{
            props.setIsLoading(false);
        }
    }

    const onCheckBoxChangeHandler = (e)=> {
        const isChecked = e.target.checked;
        setShowAirQuality(isChecked);
    }

    return(
        <Form className="search_container" onSubmit={onSearchCityHandler}>
            {/* <Form.Group className="search_input" controlId="formBasicPassword">
                <Form.Control 
                    type="text" 
                    placeholder='Search a city...' 
                    value = {city}
                    onChange = {onCityInputChangeHandler}
                />
                <button variant="primary" type="submit" disable={!isFormValid}>         
                    <img className='search_button_image'/>
                </button>
            </Form.Group> */}
            <div className='inputWrapper'> 
                <input type="input" value={city} onChange={onCityInputChangeHandler} placeholder="e.g. London,England" className="search_input" />
                <button type="submit" disable={!isFormValid}>         
                    <img className='search_button_image'/>
                </button>
            </div>
            

            {error &&  <Alert varient='danger'>
                no matching data
            </Alert>
            }
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Show air quality data" onChange={onCheckBoxChangeHandler}/>
            </Form.Group>
            
        </Form>
    )
}

export default SearchCity;