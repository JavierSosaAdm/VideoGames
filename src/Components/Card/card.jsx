import style from './card.module.css'    
const Card = ({game}) => {
    const {name, image, platform, rating} = game
    console.log(game);
    return (
        <div className={style.card}>
            <p>Nombre: {name}</p>
            <img src={image} alt="imagen del juego" className={style.cardImg} />
            <p>Plataforma: {platform}</p>
            <p>Puntuación: {rating}</p>
        </div>
    )
};

export default Card;