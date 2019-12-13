import { useState } from 'react';

export default (initialValues) => {

    const [weather, setWeather] = useState(initialValues);
   
    const handleWeatherChange = (value) => {
        setWeather({
            ...weather,
            ...value
        })

    }

    return [weather, handleWeatherChange];

}