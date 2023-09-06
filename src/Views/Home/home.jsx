
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGames, clearDetail, getByName } from '../../Redux/Actions'
import Cards from '../../Components/Cards/cards';
import NavBar from '../../Components/NavBar/nav';

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames); 
    const [searchString, setSearchString] = useState('');
    //* filtro sobre la BD
    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value)  
    };
    
    //* filtro sobre el estado
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getByName(searchString))
    };
    
    
    
    // const [filtrado, setFiltrado] = useState(allGames);
    
    //     const filtrado = allGames.filter((game) => {
    //         game.name.include(searchString)
            
    //     });
    //     setFiltrado(filtrado);
    // }
// ----------------------------------------------------------------
    // return (
    //     () => {
    //         clearDetail() //para que se limpie el estado  esto es del useEffect
    //     }
    // )
    useEffect(() => { 
        dispatch(getGames()); 
    }, [dispatch]);


    return (
        <div>
            <h1>HOME</h1>
          
            <NavBar handleCange={handleChange} handleSummit={handleSubmit} />
            <Cards allGames={allGames}/> {/* va a ser el aaray ocn todos mis juegos */}
        </div>
    )
};

export default Home;