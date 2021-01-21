import { GET_MORE_MOVIES, GET_MORE_SEARCH_MOVIES, GET_MOVIES, SEARCH_MOVIES } from "../action/types";


const initialState = {
    searchMoviesArr: [],
    movies: [],
    page: 1
}

const getMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload }
        case SEARCH_MOVIES:
            return { ...state, searchMoviesArr: action.payload }
        case GET_MORE_MOVIES:
            const prevResults = state.movies && state.movies.results;
            return { ...state, movies: { ...state.movies, results: [...prevResults, ...action.payload.results] }, page: state.page }
        case GET_MORE_SEARCH_MOVIES:
            const prevSearchResult = state.searchMoviesArr && state.searchMoviesArr.results
            return { ...state, searchMoviesArr: { ...state.searchMoviesArr, results: [...prevSearchResult, ...action.payload.results] }, page: state.page }
        default:
            return state
    }
}

export default getMoviesReducer