import React from 'react';
import Item from './weather.item';
import {getRange} from '../../helpFunctions';

export default ({forecast}) => {
    return (
        <div class="container">
            <div class="row">
                {
                    forecast.DailyForecasts.map((day, index) => {
                        const range = getRange(forecast.DailyForecasts[index].Temperature.Minimum.Value, forecast.DailyForecasts[index].Temperature.Maximum.Value);
                        return (<div class="col">
                                    <Item temperature={range} text='TEXT' />
                                </div>
                        )
                    })

                }

            </div>
        </div>
        
    )
}