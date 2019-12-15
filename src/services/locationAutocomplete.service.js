import {API_KEY} from '../config/configFile';

export default async (value) => {

    try {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`;
        const autoCompleteRaw = await fetch(url);
        return autoCompleteRaw.json();
    }

    catch(err) {
        console.log(`Following error accured while trying to fetch data: ${err}`);
        return {};
   }
} 