import { useNavigate } from 'react-router-dom';
import style from './card.module.css'    
const Card = ({game, handlerClick}) => {
    const navegate = useNavigate();
    const {id, name, image, platform, rating} = game
    function handlerNavigate () {
        navegate(`/detail/${id}`);
    }  
    return (
        <div className={style.card}>
            <p>Nombre: {name}</p>
            <img src={image} alt="imagen del juego" className={style.cardImg} />
            <p>Plataforma: {platform}</p>
            <p>Puntuación: {rating}</p>
            <button onClick={handlerNavigate} >
                Ver Detalles
            </button>
        </div>
    )
};

export default Card;