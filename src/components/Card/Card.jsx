import { Link } from 'react-router-dom';
import style from './Card.module.css';


export default function Card({id,name, status, species, gender, origin, image, onClose}) {
   
   return (
      <div className= {style.container}>
         <img src={image} alt='' /> 
         <div className= {style.datos}>
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <hr />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={() => {onClose(id)}} className={style.closeButton}>X</button>
         </div>
      </div>
   );
}
