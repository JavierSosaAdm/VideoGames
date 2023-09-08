import Card from '../Card/card';

const Cards = ({allGames, handlerClick}) => {
    const gamesList = allGames

    return (
        <div>
            {gamesList?.map((game) => (
                <Card game={game} key={game.id}/>
            ))}
        </div>
    )
};

export default Cards;