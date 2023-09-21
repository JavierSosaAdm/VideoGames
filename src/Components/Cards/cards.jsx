import Card from '../Card/card';
import Paginado from '../Paginado/paginado';
import {useState} from 'react';
import style from './cards.module.css'

const Cards = ({filteredGames}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const [items] = useState(15)

    const max = Math.ceil(filteredGames.length/items);

    return (
        
        <div className={style.container} >
            {filteredGames?.slice((currentPage -1) * items, (currentPage -1) * items + items).map((game) => (
                <li key={game.id}>
                    <Card game={game}/>
                </li>
            ))}
            <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
        </div>
    )
};

export default Cards;