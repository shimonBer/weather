export const ADD_FAVORITE = 'Add favorite';
export const REMOVE_FAVORITE = 'Remove favorite';
export const TOGGLE_TEMP = 'Toggle temperature';

export const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }

}

export const removeFavorite = (favorite) => {
    return {
        type: REMOVE_FAVORITE,
        payload: favorite
    }

}

export const toggleMetric = (metric) => {
    return {
        type: TOGGLE_TEMP,
        payload: metric
    }

}