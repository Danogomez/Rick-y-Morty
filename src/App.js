import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { Component, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import style from './components/Nav/NavBar.module.css';




function App() {
   const [characters,setCharacters] = useState ([]);
   
   const onSearch = (id) => {
   
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id)=>{
      setCharacters(characters.filter(char=> char.id !== id))
   }

   return (
      <>
      <div className='App'style = {{padding: "25px"}}>
      <Nav onSearch = {onSearch}/>
      </div>
      
      <Routes>
         <Route path= "/" element = {<Forms/>}/>
         <Route path="/home" element = {<Cards characters={characters} onClose = {onClose}/>}/>
         <Route path="/about" element = {<About/>}/>
         <Route path="/detail/:id" element = {<Detail/>}/>
      </Routes>
      </>
   );
}

export default App;
