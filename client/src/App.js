import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import Favorites from './components/Favorites/Favorites';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {
   const {pathname} = useLocation();
   const [characters,setCharacters] = useState ([]);
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
 

 const login = async (userData) => {
   console.log(userData);
   try {
      const { email, password } = userData;
      const {data} =  await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
         
      setAccess(access);
      access && navigate('/home');
      
   } catch (error) {
         console.log(error.message);
   }
}

useEffect (() => {
   !access && navigate('/');
}, [access]);




   const onSearch = async (id) => {
   
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } 

      } catch (error) {
         alert('¡No hay personajes con este ID!');
         
      }

   }
   const onClose = (id)=>{
      setCharacters(characters.filter(char=> char.id !== id))
   }

   return (
      <div>
      <div className='App'style = {{padding: "20px"}}>
         {pathname !== '/' ? <Nav onSearch = {onSearch}/> : null }
      </div>
      
      <Routes>
         <Route path= "/" element = {<Forms login= {login}/>}/>
         <Route path="/home" element = {<Cards characters={characters} onClose = {onClose}/>}/>
         <Route path="/about" element = {<About/>}/>
         <Route path="/detail/:id" element = {<Detail/>}/>
         <Route path= "/favorites" element = {<Favorites/>} />
      </Routes>
      </div>
   );
}

export default App;
