import { GET_MOVIES, SEARCH_Movies } from "../action/types";

const getMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, ...action.payload }
        case SEARCH_Movies:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default getMoviesReducer