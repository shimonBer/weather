const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

export const getRange = (first, second) => {
    const firstAsFloat = parseFloat(first);
    const secondeAsFloat = parseFloat(second);
    return `${Math.min(firstAsFloat, secondeAsFloat)} - ${Math.max(firstAsFloat, secondeAsFloat)}`;


}

export const isKeyInArr = (key, arr) => {
    const keys = Object.keys(arr);
    return keys.includes(key); 
}

export const getDayOfWeek = (date) => {
    const dateObj = new Date(date);
    var dayName = DAYS[dateObj.getDay()];
    return dayName;
}

export const getTemp = (obj, isMetric) => {
    const tempObj = isMetric ? obj.Metric : obj.Imperial;
    return (`${tempObj.Value}°${tempObj.Unit}`);

}

export const getImg = (imgNum) => {
    if (imgNum < 10){
        return (`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${imgNum}-s.png`);
    } else {
        return (`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${imgNum}-s.png`);

    }
    
}