import Card from '../Card/Card';
import {CardsContainer} from './styledComponents'

export default function Cards({characters, onClose}) {
   return (
      <div>

               {/* <select name="ordenar" id=''>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
             </select>
               <select name="ordenar" id=''>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
                </select> */}

               <CardsContainer>
         {characters.map(({id,name, status, species, gender, origin, image })=> {
            return (
               <>
               <Card
                  key = {name}
                  id = {id}
                  name = {name}
                  status= {status}
                  species= {species}
                  gender= {gender}
                  origin= {origin.name}
                  image= {image}
                  onClose= {onClose}
                  />
            </>
               );               
            })
         }
      </CardsContainer>
         </div>
   );
}
