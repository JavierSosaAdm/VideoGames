import {GET_ALL_VIDEOGAMES} from './ActionsType';
let initialState = {allGames: []}
const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allGames: action.payload // el action.payload es la respuesta que me dio la action "getGames "
            }
            
        //     break;
    
        default:
            return state;
    }
};

export default rootReducer;