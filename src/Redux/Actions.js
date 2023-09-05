require('dotenv').config();
import { HOST } from process.env;

import axios from 'axios';

export function getGames() {
    return async (dispatch) => {
        const response = await axios.get(`${HOST}/videogames`)
        return dispatch({
            type: 'GET_ALL_VIDEOGAMES',
            payload: response.data 
        })
    }
}