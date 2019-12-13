import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import View from '../weatherView/weather.view';
import autoCompleteService from '../../services/locationAutocomplete.service';
import {API_KEY, DEFAULT_LOCATION_ID, DEFAULT_LOCATION_NAME} from '../../config/configFile';
import {Container, Col, Row} from 'reactstrap';
import _ from "lodash";


export default () => {

    const [selectedObj, setSelectedObj] = useState({ Key: DEFAULT_LOCATION_ID, LocalizedName: DEFAULT_LOCATION_NAME });
    // const [options, setOptions] = useState({});
    
    const wait = 500; 
    const loadOptions = inputValue => getAsyncOptions(inputValue);
    const debouncedLoadOptions = _.debounce(loadOptions, wait);

    const getAsyncOptions = (inputValue) => {
        return new Promise((resolve, reject) => {
            const filtered = autoCompleteService(inputValue);
            const filteredArr = filtered.map(city => {
                return {value: city.Key, label: city.LocalizedName}
            });
            resolve(filteredArr);
        });
  }

    const updateLocation = newObj =>{
        setSelectedObj({ Key: newObj.value, LocalizedName: newObj.label });
    }

    return (
        <>  
        <Container>
            <Row className="justify-content-center">
                <Col sm={6}>
                    <AsyncSelect
                        cacheOptions
                        defaultOptions
                        isClearable
                        className="basic-single"
                        classNamePrefix="select"
                        name="search"
                        loadOptions={inputValue => debouncedLoadOptions(inputValue)}
                        onChange={updateLocation}
                    />                
                </Col>
            </Row>
            
        </Container>
         <View locationObj={selectedObj}/>
            
        </>
    );
}