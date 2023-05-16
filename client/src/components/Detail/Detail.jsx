import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css';


const Detail = ()=>{
    const {id} = useParams();
    const [characters, setCharacter] = useState ({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className= {style.container}>
        <div className= {style.person}>
            <img className={style.img} src={characters?.image} alt="" />
            <h1>Name: "{characters?.name}"</h1>
            <h1>Status: "{characters?.status && characters.status}"</h1>
            <h1>Species: "{characters?.species && characters.species}"</h1>
            <h1>Gender: "{characters?.gender &&  characters.gender}"</h1>
            <h1>Origin: "{characters.origin?.name  && characters.origin?.name }"</h1>
        </div>
        </div>
    )

};

export default Detail;