import axios from 'axios'
import { BASE_URL } from '../utils/api';
import { ERROR_RESET, GET_FAILURE, GET_MORE_MOVIES, GET_MOVIES, SEARCH_Movies, SET_LOADING } from './types';


export function setLoading(loading) {
    return {
        type: SET_LOADING,
        payload: loading
    }
}

export function getFailure() {
    return {
        type: GET_FAILURE
    }
}
export function setError(error) {
    return {
        type: "",
        error
    }
}

export function getMovies() {
    return async function (dispatch) {
        try {
            const getMoviesData = await axios.get(`${BASE_URL}/dkf`)
            console.log(getMoviesData, 'getMoviesData');
            await dispatch({
                type: GET_MOVIES,
                payload: getMoviesData.data
            })
            await dispatch({
                type: ERROR_RESET,
            })
        } catch (error) {
            console.log(error, 'error')
            dispatch(setError("Failed to fetch data from API."))
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
            dispatch(getFailure())
        }
    }
}

export function getMoreMovies(page) {
    return async function (dispatch) {
        try {
            const getMoreMoviesData = await axios.get(`${BASE_URL}q=<query>&limit=16&page=${page}`)
            await dispatch({
                type: GET_MORE_MOVIES,
                payload: getMoreMoviesData.data
            })
        } catch (error) {
            dispatch(getFailure())
        }
    }
}