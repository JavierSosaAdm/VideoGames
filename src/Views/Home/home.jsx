
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGames, getByName } from '../../Redux/Actions'
import Cards from '../../Components/Cards/cards';
import NavBar from '../../Components/NavBar/nav';

function Home () {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames); 
    const [searchString, setSearchString] = useState('');
    //* filtro sobre la BD
    function handleChange (e) {
        e.preventDefault();
        setSearchString(e.target.value)  
    };
    
    //* filtro sobre el estado
    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getByName(searchString))
    };

    // const handlerClick = (id) => {};
  
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