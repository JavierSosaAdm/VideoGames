import { GET_BY_NAME, GET_ALL_VIDEOGAMES, GET_BY_ID, ADD_GAME, GET_GENRE } from './ActionsType';

let initialState = {allGames: [], name: [], detail:[], copyAllGames: [], allGenres:[]}
const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allGames: action.payload, // el action.payload es la respuesta que me dio la action "getGames"
                copyAllGames: action.payload
            };
        
        case GET_BY_NAME:
            
            return {
                ...state,
                allGames: action.payload
            };
            
        case GET_BY_ID:
            return {
                ...state,
                detail: action.payload
            };
        case ADD_GAME:
            return {
                ...state,
                allGames: action.payload,
                copyAllGames: action.payload
            };
        case GET_GENRE:
            return {
                ...state,
                allGenres: action.payload
            }
    
        default:
            return {...state};
    }
};

export default rootReducer;