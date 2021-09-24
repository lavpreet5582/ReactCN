import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULTS } from "../actions/actions";
const initialMoviestate = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMoviestate, action) {
    // if(action.type === ADD_MOVIES){

    //     return {
    //         ...state,
    //         list:action.movies }
    // }
    // return state;
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
}
const initialSearchState = {
    result: {},
    showSearchResults: false,
};
export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULTS:
            return {
                ...state,
                result: action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}

// const initialRootState = {
//     movies:initialMoviestate,
//     search:initialSearchState
// }
// export  function rootReducer(state = {initialRootState},action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
const RootReducer = combineReducers({
    movies,
    search
})
// export default combineReducers({
//     movies,
//     search
// });
export default RootReducer;