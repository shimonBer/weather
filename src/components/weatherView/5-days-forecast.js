import React from 'react';
import Item from './weather.item';
import {getRange} from '../../helpFunctions';
import {Container, Col, Row} from 'reactstrap';
import {getDayOfWeek} from '../../helpFunctions';

export default ({forecast}) => {
    return (
        <Container className="view">
            <Row>
                {
                    forecast.DailyForecasts.map((day, index) => {
                        const range = getRange(forecast.DailyForecasts[index].Temperature.Minimum.Value, forecast.DailyForecasts[index].Temperature.Maximum.Value);
                        return (<Col>
                                    <Item key={index} temperature={range} text={forecast.DailyForecasts[index].Day.IconPhrase} date={forecast.DailyForecasts[index].Date}/>
                                </Col>
                        )
                    })

                }

            </Row>
        </Container>
        
    )
}