import { combineReducers } from "redux";
import errorMessage from "./error";
import getMovies from './movies'

const rootReducer = combineReducers({
    movies: getMovies,
    error: errorMessage
})

export default rootReducer