import { useSelector, useDispatch} from 'react-redux'; 
import { useState } from 'react';
import { filter } from '../../Redux/Actions';
import Cards from '../Cards/cards'
import style from './filter.module.css';
const Filter = () => {
    const allGames = useSelector((state) => state.allGames)
    const [filtrado, setFiltrado] = useState('');
    const allGenres = useSelector((state) => state.allGenres);
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setFiltrado(e.target.value)
    };

    const filteredGames = filtrado
    ? allGames.filter((game) => game.genres?.includes(filtrado))
    : allGames;
    console.log(filteredGames);

    return (
        <div className={style.div}>
                    <label className={style.label} htmlFor="genres">Filtrar por Género: </label>
                            <select onChange={handleChange} value={filtrado}>
                                <option value=''>
                                    Select
                                </option>
                                {allGenres?.map((gen) => {    
                                    return (
                                    <option value= {gen.name} key={gen.name}>
                                        {gen.name}
                                    </option>
                                    )
                                })
                            }
                         </select>

                         <label className={style.label} htmlFor="orden">Filtrar por Orden: </label>
                        <select >
                        <option>Select</option>
                        <option value="nombre">Nombre</option>
                        <option value="rating">Rating</option>
                        
                        </select>
                       <Cards filteredGames={filteredGames}/>
                </div>
            )
};
export default Filter;
   


  
    
    // const hancleOrder = () => {
        //             let filterGames = [...allGames];
        
        //              if (filtrado.orden === 'A') {
            //                  filterGames.sort((a, b) => a.name.localeCompare(b.name))
            //              }
            //              if (filtrado.orden === 'D') {
    //                  filterGames.sort((a, b) => b.name.localeCompare(a.name))
    //              }
    
    //              return setFiltrado(filterGames)
    //      }

   