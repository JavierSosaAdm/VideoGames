

import axios from 'axios';

const link = 'localhost:3001'

export function getGames() {
    return async (dispatch) => {
        const response = await axios.get(`${link}/videogames`)
        return dispatch({
            type: 'GET_ALL_VIDEOGAMES',
            payload: response.data 
        })
    }
}