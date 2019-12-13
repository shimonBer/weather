import {API_KEY} from '../config/configFile';
import {autoComplete} from '../config/mockResponses';


// export default async (value) => {
    // const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`;
    // const autoCompleteRaw = await fetch(url);
    // return autoCompleteRaw.json();

// } 

export default  (value) => {
    // const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`;
    // const autoCompleteRaw = await fetch(url);
    // return autoCompleteRaw.json();

    const auto =  autoComplete;

    return auto;
} 