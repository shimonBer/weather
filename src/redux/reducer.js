import {ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_TEMP} from './actions';

const initialState = {
    favorites: {},
    isMetric: true
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            {
                ;
                let new_favorites = {...state.favorites};
                new_favorites[action.payload.key] = action.payload.object;
                return {...state, favorites: new_favorites};
            }

        case REMOVE_FAVORITE:
            {
                let new_favorites = {...state.favorites};
                let key = action.payload;
                delete new_favorites[key];
                return {...state, favorites: new_favorites};
            }
        case TOGGLE_TEMP:
            return {...state, isMetric: !state.isMetric};

        default:
            return state;
    }
}