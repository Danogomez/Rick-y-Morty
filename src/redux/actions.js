
import { ADD_FAV, FILTER_CARDS, REMOVE_FAV, ORDER_CARDS } from './actions-type';

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character };
}

export const removeFav = (id) =>{
    return { type: REMOVE_FAV, payload: id };
}

export const filterCard = (gender) => {
    return {type:FILTER_CARDS, payload: gender}
}
export const orderCard = (order) => {
    return {type:ORDER_CARDS, payload:order}
}