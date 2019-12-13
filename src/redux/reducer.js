import {ADD_FAVORITE, REMOVE_FAVORITE} from './actions';

const initialState = {
    favorites: {}
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
        default:
            return state;
    }
}