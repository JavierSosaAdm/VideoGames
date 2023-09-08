import axios from 'axios'

const link = 'http://localhost:3001'

export function getGames() {
    return async (dispatch) => {
        const response = await axios.get(`${link}/videogames`)
            return dispatch({
                type: 'GET_ALL_VIDEOGAMES',
                payload: response.data 
            })
        
    }
};

export function getByName(name) {
    return async (dispatch) => {
        const response = await axios.get(`${link}/search?name=${name}`)
            return dispatch({
                type: 'GET_BY_NAME',
                payload: response.data 
            })
        
    };
};

export function getById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${link}/videogames/${id}`)
            return dispatch({
                type: 'GET_BY_ID',
                payload: response.data
            })
        
    };
};

export function getGenres() {
    return async (dispatch) => {
        const response = await axios.get(`${link}/genres`)
        return dispatch({
            type: 'GET_GENRE',
            payload: response.data
        })
    };
};

export function postGame() {
    return async (dispatch) => {
        const response = await axios.post(`${link}/videogames`)
        return dispatch({
            type: 'ADD_GAME',
            payload: response.data
        })
    }
};

export function clearDetail () {};