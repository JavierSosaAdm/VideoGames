import React from 'react';
import style from './Paginado.module.css'

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
        <h3 className={style.h3}>Pagina: {currentPage}</h3>
            <p className={style.h3}>De: {max}</p>
            <button className={style.button} onClick={prevHandler}>Prev</button>
            <button className={style.button} onClick={nextHandler}>Next</button>
            

    </div>
)
};

export default Paginado;