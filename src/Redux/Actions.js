

import axios from 'axios';

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
        const response = await axios.get(`${link}/videogames?name=${name}`)
        return dispatch({
            type: 'GET_BY_NAME',
            payload: response.data 
        })
        
    }
};

export function clearDetail () {};