import {API_KEY} from '../config/configFile';
import {forecast} from '../config/mockResponses';

// export default async (areaCode) => {
    // const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${areaCode}?apikey=${API_KEY}`;
    // const forecastRaw = await fetch(url);
    // return forecastRaw.json();
// 

// } 

export default (areaCode) => {
    // const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${areaCode}?apikey=${API_KEY}`;
    // const forecastRaw = await fetch(url);
    // return forecastRaw.json();
    const forc = forecast;
    return forc;

} 