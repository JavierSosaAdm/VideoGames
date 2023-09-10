import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { postGame, getGenres } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { validates } from './validates'
const Form = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.allGenres);
    
    const [allGenres, setAllGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState([])

    
    
    useEffect(() => {
        axios('http://localhost:3001/genres')
        .then(({data}) => {
            if(data) {
                setAllGenres(data)
            } else {
                window.alert('error de solicitud')
            }
        })
        .catch((error) => {console.log(error);})   
        }, []);

    const [form, setForm] = useState({
        name:'',
        platform: '',
        genres: [],
        rating: '',
        image: '',
        updated: '',
        description: '',
    });
    
    let [errors, setErrors] = useState({});
        
        
        function handlerFormChange (event) {
            if (event.target) {
                const name = event.target.name;
                const value = event.target.value;

                setForm({
                    ...form,
                    [name]: value // bindear los event.target.value del estado y de los input (para evitar cambios)
                }); 
               
                validates({
                    ...form,
                    [name]: value
                }, errors, setErrors
                )
            };
        };
        
        function handlerSelectChange (event) {
            if (selectedGenre.length > 2) {
                return
            }

            setSelectedGenre((prev) => [...prev, event.target.value])
            console.log(selectedGenre);
            setForm(prev => ({...prev, genres: [...prev.genres, event.target.value]}))
        }

        function handlerSubmit (event) {
            event.preventDefault();  
               // preventDefault es para que en los formularios no se refresque la pantalla a la hora de enviarlo
               console.log(form);
               dispatch(postGame(form))

        };
        

        



return (
    <div> 
            <h1>Crear Videojuego</h1>
            <Link to='/home'>
                    <button>Volver al menú Principal</button>
            </Link>
            <form onSubmit={handlerSubmit} >
                <label htmlFor="name">Nombre: </label>
                <input id='name' value={form.name} type="text" name='name' placeholder="Escribir nombre" onChange={handlerFormChange} />
                <span>{errors.name}</span>
                
                
                <hr />
                <label htmlFor="platform">Plataformas: </label>
                <input id='platform' value={form.platform} type="text" name='platform' placeholder="Inserte las plataformas de jugabilidad" onChange={handlerFormChange} />
                {errors.platform !== '' ? <span>{errors.platform}</span> : ''}
                <hr />
                <label htmlFor="genres">Géneros: </label>
                <select onChange={handlerSelectChange}>
                <option>
                    Select
                </option>
                {allGenres?.map((gen) => {
                    return (
                        <option value= {gen.id} key={gen.name}>
                            {gen.name}
                        </option>
                    )
                })}
                </select>
                {/* <input id='genres' value={form.genres} type="text" name='genres' placeholder="Inserte los géneros" onChange={handlerFormChange} /> */}
                {/* {errors.genres !== '' ? <span>{errors.genres}</span> : ''} */}
                <hr />
                <label htmlFor="rating">Rating: </label>
                <input id='rating' value={form.rating} type="text" name='rating' placeholder="Puntúe el juego" onChange={handlerFormChange} />
                {errors.rating !== '' ? <span>{errors.rating}</span> : ''}
                <hr />
                <label htmlFor="image">Imagen: </label>
                <input id='image' value={form.image} type="text" name='image' placeholder="Inserte link de la imagen" onChange={handlerFormChange} />
                {errors.image !== '' ? <span>{errors.image}</span> : ''}
                <hr />
                <label htmlFor="updated">Fecha: </label>
                <input id='updated' value={form.updated} type="text" name='updated' placeholder="Coloque la fecha" onChange={handlerFormChange} />
                {errors.updated !== '' ? <span>{errors.updated}</span> : ''}
                <hr />
                <label htmlFor="description">Descripción:</label>
                <input id='description' value={form.description} type="text" name='description' placeholder="Elabore una breve descripción del juego" onChange={handlerFormChange} />
                {errors.description !== '' ? <span>{errors.description}</span> : ''}
                <hr />
                <button type='submit' >Crear Juego</button>
            </form>
        </div>
    )
};

export default Form;



