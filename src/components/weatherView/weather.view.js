import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import Item from './weather.item';
import curWeatherService from '../../services/curWeather.service';
import forecastService from '../../services/forecast.service';
import Forecast from '../weatherView/5-days-forecast';
import useWeather from '../../customHooks/useWeather.hook';
import { curWeather } from '../../config/mockResponses';
import {isEmpty, isKeyInArr} from '../../helpFunctions';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container, Col, Row} from 'reactstrap';
import Like from '../common/Like';
import {addFavorite, removeFavorite} from '../../redux/actions';



export const View = ({ locationObj, favorites, addToFavorites, removeFromFavorites }) => {

    const [curWeatherObj, updateCurWeatherObj] = useState({});
    const [forecastWeatherObj, updateForecastWeatherObj] = useState({});
    const [liked, toggleLiked] = useState(isKeyInArr(locationObj.Key, favorites));


    useEffect(
        // (async () => {
        //     const curWeather = await curWeatherService(locationId);
        //     updateWeatherState({
        //         curWeatherObj: curWeather[0]
        //     });
        //     const forecastWeather = await forecastService(locationId);
        //     updateWeatherState({
        //         forecastWeatherObj: forecastWeather
        //     });
            
        // })();

        () => {
            const curWeather = curWeatherService(locationObj.Key);
            updateCurWeatherObj(curWeather[0]);
            
            const forecastWeather = forecastService(locationObj.Key);
            updateForecastWeatherObj(forecastWeather);
  
            
        } ,[locationObj]); 

    const handleLike = () => {
        
        liked ? removeFromFavorites(locationObj.Key) : addToFavorites({'key': locationObj.Key, 'object' : {'cityName': locationObj.LocalizedName, 
                                                                                            'temperature': curWeatherObj.Temperature.Metric.Value,
                                                                                            'text': curWeatherObj.WeatherText}});
        toggleLiked(!liked);
    }

    
    return (
        <>
            { !isEmpty(curWeatherObj) && 
                <Jumbotron>
                    <Container style={{textAlign: 'center'}}>
                        <>
                            <Row className="justify-content-center">
                                <h2>{locationObj.LocalizedName} </h2>
                                <Like liked={liked} onClick={handleLike} />
                            </Row>
                            

                            <h1>{curWeatherObj.Temperature.Metric.Value}</h1>
                            <p>{curWeatherObj.WeatherText}</p>
                            <p class="card-text"><small class="text-muted">Last updated on {new Date().toLocaleTimeString({timeStyle: 'short'})}</small></p>

                        </>
                    </Container>
              </Jumbotron>
            }
            { !isEmpty(forecastWeatherObj) && <Forecast forecast={forecastWeatherObj}/> }
        </>
    )
}

export default connect(
    function(state) {
        return {
            favorites: state.favorites
        }
    },
    function(dispatch) {
        return {
            addToFavorites: (newFavorite) => dispatch(addFavorite(newFavorite)),
            removeFromFavorites: (key) => dispatch(removeFavorite(key))
        }
    }
)(View);

