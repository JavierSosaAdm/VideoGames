import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getByName } from '../../Redux/Actions';
import style from './nav.module.css';

const NavBar = () => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch()

    function handleChange (e) {
        e.preventDefault();
        setSearchString(e.target.value)  
        
    };
    
    //* filtro sobre el estado
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getByName(searchString))
       
    };

    return (
        <div>
            <Link to='/form'>
                <button className={style.button}>CREAR VIDEOJUEGO</button>
            </Link>
            <form className={style.searchBar} onChange={handleChange} >
                <input className={style.input} placeholder='Busqueda' type='search'/>
                <button className={style.searchButton} type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
};

export default NavBar;