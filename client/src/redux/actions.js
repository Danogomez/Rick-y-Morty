import axios from 'axios';
import { ADD_FAV, FILTER_CARDS, REMOVE_FAV, ORDER_CARDS } from './actions-type';



export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
         try {
            const {data} = await axios.post(endpoint, character);
            
            if(!data.length) throw Error('no hay favoritos!')

            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
         } catch (error) {
            console.log(error.message);
         }
   };
};

 export const removeFav = (id) => {
    try {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}` 
    return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      };
      } catch (error) {
         console.log(error.message)
     } 
}
      
    
 

export const filterCard = (gender) => {
    return {type:FILTER_CARDS, payload: gender}
}
export const orderCard = (order) => {
    return {type:ORDER_CARDS, payload:order}
}