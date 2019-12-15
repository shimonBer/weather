import {API_KEY} from '../config/configFile';

export default async (areaCode) => {
     try {
          const url = `http://dataservice.accuweather.com/currentconditions/v1/${areaCode}?apikey=${API_KEY}&details=true`;
          const todayRaw = await fetch(url);
          return await todayRaw.json();
     }
     catch(err) {
          console.log(`Following error accured while trying to fetch data: ${err}`);
          return {};
     }
    
    
} 
