import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';




function Nav ({onSearch}){
    
return (

    <nav className={style.nav}>
        
        <div className= {style.button}>
        <Link to='/About'><button className={style.aboutButton} onClick={()=> {}}> ABOUT </button></Link>
        <Link to='/home'><button className={style.homeButton} onClick={()=> {}}> HOME </button></Link>
        <Link to='/favorites'><button className={style.homeButton} onClick={()=> {}}> FAVORITES </button></Link>
        </div>
            <SearchBar onSearch={onSearch} />
    </nav>
    );
}

export default Nav;

                