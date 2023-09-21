
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getGames, getGenres } from '../../Redux/Actions'
import Cards from '../../Components/Cards/cards';
import NavBar from '../../Components/NavBar/nav';
import Filter from '../../Components/Filter/Filter';
import style from './home.module.css';



function Home () {
    const allGames = useSelector((state) => state.allGames); 
    const [totalGames, setTotalGames] = useState([])
    const dispatch = useDispatch();
    
    useEffect(() => { 
        setTotalGames(allGames)
        dispatch(getGames()); 
    }, []);
    
    useEffect(() => {
        dispatch(getGenres());
    }, [])
    
    
    
    return (
        <div >
            <h1 className={style.h1} >HOME</h1>
            <NavBar/>
            <Filter className={style.filters} allGames={allGames} />
        </div>
    )
};

export default Home;