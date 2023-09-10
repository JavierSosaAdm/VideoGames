import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { postGame, getGenres } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    
    let [errors, setErrors] = useState({
        name:'',
        platform: '',
        genres: [],
        rating: '',
        image: '',
        updated: '',
        description: '',
    });
        const validate = async (form) => {    
            // let {name, platform, genres, rating, image, updated, description} = form;
            let newErrors = {...errors};

            if (form.name) {
                if (/^[a-zA-Z0-9\s]+$/.test(form.name)) {
                    newErrors = {...errors, name: ''}
                } else {
                    newErrors.name = 'Nombre inválido'
                }
            }
                  
            if (form.genres) {
                if (/^[a-zA-Z0-9\s]+$/.test(form.platform)) {
                    newErrors = {...errors, platform: ''}
                } else {
                    newErrors = {...errors, platform: '*Plataforma invalida'}
                };
            }            
            
            if (form.genres) {
                if (/^[a-zA-Z0-9\s]+$/.test(form.genres)) {
                    newErrors = {...errors, genres: ''}
                } else {
                    newErrors = {...errors, genres: '*Elija al menos un género'}
                };
            }

            if (form.rating) {
                if (/^(?:10(?:\.0{1,2})?|[0-9](?:\.\d{1,2})?)$/.test(form.rating)) {
                    newErrors = {...errors, rating: ''}
                } else {
                    newErrors = {...errors, rating: '*Número inválido'}
                };
            }   
            
            if (form.image) {
                if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(form.image)) {
                    newErrors = {...errors, image: ''}
                } else {
                    newErrors = {...errors, image: '*El link no pertenece a una inagen'}
                };
            }

            if (form.updated) {
                if (/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/.test(form.updated)) {
                    newErrors = {...errors, updated: ''}
                } else {
                    newErrors = {...errors, updated: '*Fecha inválida'}
                };
            }

            if (form.description) {
                if (/[\w\u00C0-\u017F]+/g.test(form.description)) {
                    newErrors = {...errors, description: ''}
                } else {
                    newErrors = {...errors, description: '*Debes agregar una descripción del juego'}
                };     
            }   
               
            setErrors(newErrors);    
            
        };
        
        function handlerFormChange (event) {
            if (event.target) {
                const name = event.target.name;
                const value = event.target.value;

                setForm({
                    ...form,
                    [name]: value // bindear los event.target.value del estado y de los input (para evitar cambios)
                }); 
               
                setErrors(
                    validate({
                    ...form,
                    [name]: value,
                    
                })
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
                {errors.name? <span>{errors.name}</span> : null}
                
                
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
                        <option value= {gen.name} key={gen.name}>
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



