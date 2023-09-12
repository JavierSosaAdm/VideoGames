import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getByName } from '../../Redux/Actions';
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
        <>
            <Link to='/form'>
                <button>CREAR VIDEOJUEGO</button>
            </Link>
            <form onChange={handleChange} >
                <input placeholder='Busqueda' type='search'/>
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
        </>
    )
};

export default NavBar;