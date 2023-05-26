 import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./actions-type";
 
 
 const initialState = {
    myFavorites: [],
    allCharactersFav: []
 }

 const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        
        case ADD_FAV:
            return { ...state,
                myFavorites: payload,
                allCharacters: payload };

        case REMOVE_FAV:
            return { ...state, myFavorites: payload };


        case FILTER_CARDS:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites:
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
            }
            case ORDER_CARDS:
                const allCharactersCopy = [...state.allCharactersFav]
                return {
                ...state,
                myFavorites:
                payload === 'A' 
                ? allCharactersCopy.sort((a,b) => a.id - b.id) 
                : allCharactersCopy.sort((a,b) => b.id - a.id)
                }

        default:
            return { ...state, } 
    }
 } 

 export default reducer;