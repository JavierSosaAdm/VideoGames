
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGames, getByName } from '../../Redux/Actions'
import Cards from '../../Components/Cards/cards';
import NavBar from '../../Components/NavBar/nav';
import Paginado from '../../Components/Paginado/pajinado'

function Home () {
    const itemsPerPage = 15
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames); 
    
    const [totalGames, setTotalGames] = useState([])
    // console.log(totalGames);
    // const [items, setItems] = useState([...totalGames].slice(0, itemsPerPage));
    
    
    
    
    // console.log(items);
    
    //* filtro sobre la BD

   
    

    // const nextHandler = () => {
    //     const totalElements = totalGames.length;
    //     // console.log(totalElements);
    //     const nextPage = currentPage + 1;

    //     const firstIndex = nextPage * itemsPerPage;

    //     if (firstIndex === totalElements) {
    //         return
    //     } else {
    //         setItems(...totalGames.slice(firstIndex, itemsPerPage))

    //     }
    //         setCurrentPage(nextPage);
    //     console.log('next');
        
    // };

    // const prevHandler = () => {
    //     const prevPage = currentPage - 1;
        
    //     if (prevPage < 1) return; 

    //     const firstIndex = prevPage * itemsPerPage;

    //     setItems([...totalGames].slice(firstIndex, itemsPerPage))
        
    //     setCurrentPage(prevPage);
    //     console.log('prev');
    // };

    
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
        setTotalGames(allGames)
        dispatch(getGames()); 
    }, [dispatch]);


    return (
        <div>
            <h1>HOME</h1>

            <NavBar/>
            <h2>Galería</h2>
            {/* <Paginado currentPage={currentPage} items={items} nextHandler={nextHandler} prevHandler={prevHandler} /> */}
            <Cards allGames={allGames} />     
            
        </div>
    )
};

export default Home;