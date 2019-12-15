import React from 'react';
import Item from './weather.item';
import {getRange} from '../../helpFunctions';

export default ({forecast}) => {
    return (
        
            <div className="frame">
                {

                forecast.DailyForecasts.map((day, index) => {
                    const range = `${getRange(forecast.DailyForecasts[index].Temperature.Minimum.Value, forecast.DailyForecasts[index].Temperature.Maximum.Value)}°${forecast.DailyForecasts[index].Temperature.Maximum.Unit}`;
                    
                    return  <Item key={index} temperature={range} text={forecast.DailyForecasts[index].Day.IconPhrase} icon={forecast.DailyForecasts[index].Day.Icon} date={forecast.DailyForecasts[index].Date}/>

                })
            }
            </div>
        
 
    )
}