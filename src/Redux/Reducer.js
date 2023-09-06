import { GET_BY_NAME, GET_ALL_VIDEOGAMES } from './ActionsType';

let initialState = {allGames: [], copyAllGames: [], allGenres:[]}
const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allGames: action.payload, // el action.payload es la respuesta que me dio la action "getGames"
                copyAllGames: action.payload
            }
        
        case GET_BY_NAME:
            return {
                ...state,
                allGames: action.payload, 
            }
            
        //     break;
    
        default:
            return state;
    }
};

export default rootReducer;