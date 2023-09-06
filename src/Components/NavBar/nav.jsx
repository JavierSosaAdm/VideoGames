const NavBar = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <form onChange={handleChange} >
                <input placeholder='Busqueda' type='search'/>
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
};

export default NavBar;