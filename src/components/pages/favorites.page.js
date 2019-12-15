import React from 'react';
import Item from '../weatherView/weather.item';
import {connect} from 'react-redux';
import '../../themes/cardsDisplay.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../../themes/view.scss';
import {getTemp} from '../../helpFunctions';

const favorites = ({favorites, isMetric}) => {
    return (
        
        <Jumbotron>
            <h2>My Favorites</h2>
            <div className="frame">
            {
                Object.keys(favorites).map((favoriteKey, index) => {
                    return <Item key={index} city={favorites[favoriteKey].cityName} temperature={getTemp(favorites[favoriteKey].temperature, isMetric)} text={favorites[favoriteKey].text}
                                link={`/${favorites[favoriteKey].cityName}/${favoriteKey}`} />
                })

            }
            </div>

        </Jumbotron>
    );
}

export default connect(
    function(state) {
        return {
            favorites: state.favorites,
            isMetric: state.isMetric

        }
    }

)(favorites);