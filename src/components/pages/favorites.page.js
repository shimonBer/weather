import React from 'react';
import Item from '../weatherView/weather.item';
import {connect} from 'react-redux';
import '../../themes/cardsDisplay.scss';
import {Container, Col, Row} from 'reactstrap';

const favorites = ({favorites}) => {
    return (
        <>
            <h1>My favorites</h1>
            <Container className="view">
            <Row>
                {
                    Object.keys(favorites).map((favoriteKey, index) => {
                        return <Item key={index} locationId={favoriteKey} city={favorites[favoriteKey].cityName} temperature={favorites[favoriteKey].temperature} text={favorites[favoriteKey].text} />
                    })

                }

            </Row>
        </Container>
        </>


    );
}

export default connect(
    function(state) {
        return {
            favorites: state.favorites

        }
    }

)(favorites);