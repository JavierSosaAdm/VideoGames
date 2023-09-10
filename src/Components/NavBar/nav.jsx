import {Link} from 'react-router-dom';
const NavBar = ({handleChange, handleSubmit}) => {
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