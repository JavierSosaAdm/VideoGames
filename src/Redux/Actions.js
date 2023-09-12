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
        try {
            const response = await axios.get(`${link}/search?name=${name}`)
            
                 dispatch({
                    type: 'GET_BY_NAME',
                    payload: response.data
                })
            
        } catch (error) {
            console.log(error);
        }   
    };
};

export function getById(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${link}/videogames/${id}`)
            
            return dispatch({
                type: 'GET_BY_ID',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            alert('Hubo un error, vuelve a intentarlo nuevamente')
        }
    };
};

export function getGenres() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${link}/genres`)
            
             dispatch({
                type: 'GET_GENRE',
                payload: response.data
            })
            
        } catch (error) {
            console.log(error);
        }
    };
};

export function postGame(form) {
    try {
        return async (dispatch) => {
            console.log(form);
            const response = await axios.post(`${link}/videogames`, form)
            alert('El Juego fué creado correctamente!')
            return dispatch({
                type: 'ADD_GAME',
                payload: response.data
            })
        }
        
    } catch (error) {
        console.log(error);
        alert('hubo un inconveniente, prueba nuevamete')
    }
};

export function clearDetail () {};