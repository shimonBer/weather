import {API_KEY} from '../config/configFile';
import {curWeather} from '../config/mockResponses';

export default async (areaCode) => {
     const url = `http://dataservice.accuweather.com/currentconditions/v1/${areaCode}?apikey=${API_KEY}&details=true`;
     const todayRaw = await fetch(url);
     return await todayRaw.json();
    
} 

// export default (areaCode) => {
//     // const url = `http://dataservice.accuweather.com/currentconditions/v1/${areaCode}?apikey=${API_KEY}`;
//     // const todayRaw = await fetch(url);
//     // return await todayRaw.json();
//     const cur =  curWeather;
//     return curWeather;
    
// } 

