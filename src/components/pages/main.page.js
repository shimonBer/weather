import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import View from '../weatherView/weather.view';
import autoCompleteService from '../../services/locationAutocomplete.service';
import {  DEFAULT_LOCATION_ID, DEFAULT_LOCATION_NAME } from '../../config/configFile';
import {Container, Col, Row} from 'reactstrap';
import _ from "lodash";
import {useParams} from "react-router-dom";

export default () => {

    let { city, cityid } = useParams();
    const [selectedObj, setSelectedObj] = useState((city && cityid) ?  { Key: cityid, LocalizedName: city } : { Key: DEFAULT_LOCATION_ID, LocalizedName: DEFAULT_LOCATION_NAME });
    
    const wait = 500; 
    const loadOptions = inputValue => getAsyncOptions(inputValue);
    const debouncedLoadOptions = _.debounce(loadOptions, wait);

    const getAsyncOptions = (inputValue) => {
        if(inputValue){
            return new Promise((resolve, reject) => {

                let filteredArr;
                autoCompleteService(inputValue).then((res) => {
                    filteredArr = res ? res.map(city => {
                        return {value: city.Key, label: city.LocalizedName}
                    }) : []
                    resolve(filteredArr);
                });    
            });

        }
        
  }

    const updateLocation = newObj =>{
        setSelectedObj({ Key: newObj.value, LocalizedName: newObj.label });
    }

    return (
        <>  
        <Container style={{marginTop: '1%'}}>
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