import { GET_MORE_MOVIES, GET_MOVIES, SEARCH_Movies } from "../action/types";


const initialState = {
    searchMoviesArr: [],
    page: 1,
    movies: []
}

const getMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload }
        case SEARCH_Movies:
            return { ...state, searchMoviesArr: action.payload }
        // case GET_MOVIES:
        //     const movies = state.movies.concat(action.payload)
        //     return { ...state, movies, page: state.page }
        default:
            return state
    }
}

export default getMoviesReducer