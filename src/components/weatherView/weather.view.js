import React, { useEffect } from 'react';
import Item from './weather.item';
import curWeatherService from '../../services/curWeather.service';
import forecastService from '../../services/forecast.service';
import Forecast from '../weatherView/5-days-forecast';
import useWeather from '../../customHooks/useWeather.hook';

const DEFAULT_LOCATION_ID = '215854';

export default () => {

    const [weatherState, updateWeatherState] = useWeather({
        locationId: DEFAULT_LOCATION_ID,
        curWeatherObj: {},
        forecastWeatherObj: {}
    })

    useEffect(() => {
        (async () => {
            const curWeatherObj = (await curWeatherService(weatherState.locationId))[0];
            updateWeatherState(curWeatherObj);
            const forecastWeatherObj = await forecastService(weatherState.locationId);
            updateWeatherState(forecastWeatherObj);
            
        })();

    }, [weatherState]); 

    
    return (
        <>
            <Item />
            <Forecast />
        </>
    )
}