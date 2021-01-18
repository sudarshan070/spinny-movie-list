import axios from 'axios'
import { BASE_URL } from '../utils/api';
import { GET_MOVIES, SEARCH_Movies } from './types';


export function getMovies() {
    return async function (dispatch) {
        try {
            const getMoviesData = await axios.get(`${BASE_URL}q=<query>&limit=16&page=1`)
            await dispatch({
                type: GET_MOVIES,
                payload: getMoviesData.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getSearchMovies(search) {
    return async function (dispatch) {
        try {
            const searchMoviesData = await axios.get(`${BASE_URL}q=${search}`)
            console.log(searchMoviesData, 'searchMoviesData');
            await dispatch({
                type: SEARCH_Movies,
                payload: searchMoviesData.data
            })

        } catch (error) {
            console.log(error)
        }
    }
} 