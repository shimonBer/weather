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