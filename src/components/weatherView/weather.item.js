import React from 'react';
import '../../themes/cardsDisplay.scss';
import { getDayOfWeek, getImg } from '../../helpFunctions';
import {Link} from 'react-router-dom';

export default ({temperature, text, date, city, link, icon}) =>{
    
    return (
        <div className="item card">
            
            <h3>{city}</h3>
            {
                date && <h4>{getDayOfWeek(date)}</h4>
            }
            <h5 className="card-title">{temperature}</h5>
            <p className="card-text">{text}</p>
            
            {
                icon && <img src={getImg(icon)} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png" width="75" height="45"></img>
            }
            {
                link && <Link to={`/main${link}`}><button className="btn btn-primary">See weather</button></Link>
            }
        </div>
    )
}