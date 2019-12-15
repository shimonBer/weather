import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import curWeatherService from '../../services/curWeather.service';
import forecastService from '../../services/forecast.service';
import Forecast from '../weatherView/5-days-forecast';
import {isEmpty, isKeyInArr, getTemp, getImg} from '../../helpFunctions';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container, Row} from 'reactstrap';
import Like from '../common/Like';
import {addFavorite, removeFavorite} from '../../redux/actions';
import '../../themes/view.scss';

export const View = ({ locationObj, favorites, addToFavorites, removeFromFavorites, isMetric }) => {

    const [weatherObj, updateWeather] = useState({
        curWeatherObj: {},
        forecastWeatherObj: {}

    });
    const [liked, toggleLiked] = useState(false);

    useEffect(() => {
        (async () => {
            const forecastWeather = await forecastService(locationObj.Key, isMetric);
            const curWeather = await curWeatherService(locationObj.Key);


            updateWeather({
                curWeatherObj: curWeather[0],
                forecastWeatherObj: forecastWeather
            });
            toggleLiked(isKeyInArr(locationObj.Key, favorites));
            
        })()

    }, [locationObj, favorites, isMetric]);


    const handleLike = () => {
        
        liked ? removeFromFavorites(locationObj.Key) : addToFavorites({'key': locationObj.Key,
                                                                        'object' : {'cityName': locationObj.LocalizedName, 
                                                                                    'temperature': weatherObj.curWeatherObj.Temperature,
                                                                                    'text': weatherObj.curWeatherObj.WeatherText}});
        toggleLiked(!liked);
    }

    return (
        <>
            { !isEmpty(weatherObj.curWeatherObj) && 
                (<Jumbotron>
                    <Container style={{textAlign: 'center'}}>
                        <>
                            <Row className="justify-content-center">
                                <h2>{locationObj.LocalizedName} </h2>
                                <Like liked={liked} onClick={handleLike} />
                            </Row>
                            <h1>{getTemp(weatherObj.curWeatherObj.Temperature, isMetric)}</h1>
                            <p>{weatherObj.curWeatherObj.WeatherText}</p>
                            <img src={getImg(weatherObj.curWeatherObj.WeatherIcon)} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"></img>
                            <p className="card-text"><small className="text-muted">Last updated on {new Date().toLocaleTimeString({timeStyle: 'short'})}</small></p>

                        </>
                    </Container>
              </Jumbotron>)
            }
            { !isEmpty(weatherObj.forecastWeatherObj) && <Forecast forecast={weatherObj.forecastWeatherObj}/> }
        </>
    )
}

export default connect (
    function(state) {
        return {
            favorites: state.favorites,
            isMetric: state.isMetric
        }
    },
    function(dispatch) {
        return {
            addToFavorites: (newFavorite) => dispatch(addFavorite(newFavorite)),
            removeFromFavorites: (key) => dispatch(removeFavorite(key))
        }
    })(View);

