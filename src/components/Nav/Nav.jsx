import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';




function Nav ({onSearch}){
return (
    <div className= {style.nav}>
        <SearchBar onSearch={onSearch} />
        <Link to='/About'><button className={style.aboutButton} onClick={()=> {}}> ABOUT </button></Link>
        <Link to='/home'><button className={style.homeButton} onClick={()=> {}}> HOME </button></Link>
    </div>
    );
}

export default Nav;

                