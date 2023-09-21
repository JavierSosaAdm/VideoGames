import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../Redux/Actions';
import style from './detail.module.css'
const Detail = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch();
    const {id} = useParams();
    const gameData = useSelector(state => state.detail);
    // console.log(gameData);
    const [game, setGame] = useState({});
    // console.log(game);
    useEffect(() => {
        dispatch(getById(id));
    }, [id]);

    useEffect(() => {
        setGame(gameData);
        return {
            
        }
    }, [gameData])

    const handlerNavigate = () => {
        navigate('/home')
    }

    return (
        
        <div className={style.container} >
            {/* <h1 className={style.h1}>Descripción del Juego!</h1> */}

            <div className={style.detail}>
            <h2 className={style.name} >{game?.name}</h2>
                <img className={style.image} src={game?.image} alt="imagen del juego" />
                <p>Gerenos: {game?.genres}</p>
                <p>Plataformas: {game?.platform}</p>
                <p>Lanzamiento: {game?.updated}</p>
                <p>Rating: {game?.rating}</p>
                <p>ID: {game?.id}</p>
                <p>Descripción: {game?.description}</p>
                <button className={style.button} onClick={handlerNavigate}>BACK</button>
            </div>
        </div>
    )
};

export default Detail;