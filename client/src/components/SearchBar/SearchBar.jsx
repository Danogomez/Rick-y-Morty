import { useState } from 'react';
import style from './SearchBar.module.css';


export default function SearchBar({onSearch}) {

   const [id, setid] = useState ('');

   const handleChange = (event)  => {
      setid(event.target.value)
   };

   return (
      <div className={style.container}>
          <input type='search' onChange={handleChange} value = {id}  />
         <button className={style.searchButton} onClick={()=> {onSearch(id)}}> AGREGAR </button> 
      </div>
   );
}
