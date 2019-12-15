import {API_KEY} from '../config/configFile';

export default async (areaCode, isMetric) => {

    try{
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${areaCode}?apikey=${API_KEY}&metric=${isMetric}`;
        const forecastRaw = await fetch(url);
        return forecastRaw.json();
    }

    catch(err) {
        console.log(`Following error accured while trying to fetch data: ${err}`);
        return {};
   }


} 