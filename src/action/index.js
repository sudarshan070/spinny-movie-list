import axios from 'axios'
import { BASE_URL } from '../utils/api';
import { GET_MOVIES } from './types';


export function getMovies() {
    return async function (dispatch) {
        try {
            const getMoviesData = await axios.get(`${BASE_URL}`)
            console.log(getMoviesData, 'action data');
            await dispatch({
                type: GET_MOVIES,
                payload: getMoviesData.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}