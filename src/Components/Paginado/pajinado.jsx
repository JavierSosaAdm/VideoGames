import React from 'react';
import Cards from '../Cards/cards'
const Paginado = ({currentPage, setCurrentPage, max}) => {
    
    const prevHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextHandler = () => {
        if (currentPage < max) {
            setCurrentPage(currentPage + 1);
        }
    };


return (
    <div>
        <h3>Pagina: {currentPage}</h3>
            <button onClick={prevHandler}>Prev</button>
            <h2>{currentPage}</h2>
            <p>De: {max}</p>
            <button onClick={nextHandler}>Next</button>

    </div>
)
};

export default Paginado;