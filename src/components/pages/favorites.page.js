import React from 'react';
import Item from '../weatherView/weather.item';
import {connect} from 'react-redux';

const favorites = ({favorites}) => {
    return (
        <>
            <h1>favorites page</h1>
            {
                
                Object.keys(favorites).map((favoriteIndex, index) => {
                    debugger;
                    return <Item temperature={favorites[favoriteIndex].temperature} text={favorites[favoriteIndex].text} />
                })
            }
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