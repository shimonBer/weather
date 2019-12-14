import React from 'react';
import '../../themes/cardsDisplay.scss';
import { getDayOfWeek } from '../../helpFunctions';

export default ({temperature, text, date, city, locationId}) =>{


    return (
        <div className="card">
            {
                <div className="card-body">
                    <h3>{city}</h3>
                    <h5>{locationId}</h5>

                    {
                        date && <h4>{getDayOfWeek(date)}</h4>

                    }
                    <h5 className="card-title">{temperature}</h5>
                    <p className="card-text">{text}</p>
                </div>
            }
            
        </div>
    )

}