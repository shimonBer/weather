import {API_KEY} from '../config/configFile';

export default async (areaCode) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${areaCode}?apikey=${API_KEY}`;
    const todayRaw = await fetch(url);
    return todayRaw.json();
} 