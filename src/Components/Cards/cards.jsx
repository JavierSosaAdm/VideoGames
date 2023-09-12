import Card from '../Card/card';
import Paginado from '../Paginado/pajinado';
import {useState} from 'react';

const Cards = ({allGames, handlerClick}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const [items, setItems] = useState(15)

    const max = Math.ceil(allGames.length/items);
    
    
    
    return (
        <div>
            <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
            {allGames?.slice((currentPage -1) * items, (currentPage -1) * items + items).map((game) => (
                <li key={game.id}>
                    <Card game={game}/>
                </li>
            ))}
        </div>
    )
};

export default Cards;