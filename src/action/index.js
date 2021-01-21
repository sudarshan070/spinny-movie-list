import axios from 'axios'
import { BASE_URL } from '../utils/api';
import { ERROR_RESET, GET_MORE_MOVIES, GET_MORE_SEARCH_MOVIES, GET_MOVIES, SEARCH_MOVIES } from './types';


export function setError(error) {
    return {
        type: "",
        error
    }
}

export function getMovies() {
    return async function (dispatch) {
        try {
            const getMoviesData = await axios.get(`${BASE_URL}q=<query>&limit=16&page=1`)
            await dispatch({
                type: GET_MOVIES,
                payload: getMoviesData.data
            })
            await dispatch({
                type: ERROR_RESET,
            })
        } catch (error) {
            dispatch(setError("Failed to fetch data from API."))
        }
    }
}

export function getSearchMovies(search) {
    return async function (dispatch) {
        try {
            const searchMoviesData = await axios.get(`${BASE_URL}q=${search}`)
            await dispatch({
                type: SEARCH_MOVIES,
                payload: searchMoviesData.data
            })
        } catch (error) {
            dispatch(setError('You not search now'))
        }
    }
}

export function getMoreSearchMovies(page) {
    return async function (dispatch) {
        try {
            const moreSearchMovies = await axios.get(`${BASE_URL}q=<query>&page=${page}`)
            await dispatch({
                type: GET_MORE_SEARCH_MOVIES,
                payload: moreSearchMovies.data
            })
        } catch (error) {
            dispatch(setError('You not search now'))
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
            dispatch(setError("You not more fetch data from API."))
        }
    }
}