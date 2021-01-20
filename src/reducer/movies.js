import { GET_MORE_MOVIES, GET_MOVIES, SEARCH_Movies } from "../action/types";


const initialState = {
    searchMoviesArr: [],
    movies: [],
    page: 1
}

const getMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload }
        case SEARCH_Movies:
            return { ...state, searchMoviesArr: action.payload }
        case GET_MORE_MOVIES:
            const prevResults = state.movies && state.movies.results;
            return { ...state, movies: { ...state.movies, results: [...prevResults, ...action.payload.results] }, page: state.page }

        default:
            return state
    }
}

export default getMoviesReducer