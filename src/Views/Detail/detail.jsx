import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../Redux/Actions';
const Detail = () => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location.pathname);
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
    }, [gameData])

    const handlerNavigate = () => {
        navigate('/home')
    }

    return (
        <div>
            <h1>Descripción del Juego!</h1>
            <h2>{game?.name}</h2>

            <div>
                <img src={game?.image} alt="imagen del juego" />
                <p>Gerenos: {game?.genres}</p>
                <p>Plataformas: {game?.platform}</p>
                <p>Lanzamiento: {game?.updated}</p>
                <p>Rating: {game?.rating}</p>
                <p>ID: {game?.id}</p>
                <p>Descripción: {game?.description}</p>
            </div>
            <button onClick={handlerNavigate}>BACK</button>
        </div>
    )
};

export default Detail;