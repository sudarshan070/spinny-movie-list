import { GET_MOVIES } from "../action/types";

const getMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default getMoviesReducer