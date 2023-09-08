import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { postGame, getGenres } from '../../Redux/Actions';
const Form = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state);
    const [genre, setGenre] = useState(state => state)
    const [form, setForm] = useState({
      
    });

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

const handlerFormChange = (event) => {
    
    const name = event.target.name;
    const value = event.target.value;
    setForm({
        ...form,
        [name]: value // bindear los event.target.value del estado y de los input (para evitar cambios)
    }); 
};

const handlerSubmit = (event) => {
    event.preventDefault();     // preventDefault es para que en los formularios no se refresque la pantalla a la hora de enviarlo
};

let [errors, setErrors] = useState({
    name:'',
    platform: '',
    genres: '',
    rating: '',
    image: '',
    updated: '',
    description: '',
});

const validate = () => {
    

    if (/^[a-zA-Z0-9\s]+$/.test(form.name)) {
        setErrors = {...errors, name: ''}
    } else {
        setErrors('*No debe contener signos')
    };

    if (/^[a-zA-Z0-9\s]+$/.test(form.platform)) {
        setErrors = {...errors, platform: ''}
    } else {
        setErrors = {...errors, platform: '*Plataforma invalida'}
    };

    if (/^[a-zA-Z0-9\s]+$/.test(form.genres)) {
        setErrors = {...errors, genres: ''}
    } else {
        setErrors = {...errors, genres: '*Elija al menos un género'}
    };

    if (/^(?:10(?:\.0{1,2})?|[0-9](?:\.\d{1,2})?)$/.test(form.rating)) {
        setErrors = {...errors, rating: ''}
    } else {
        setErrors = {...errors, rating: '*Número inválido'}
    };

    if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(form.image)) {
        setErrors = {...errors, image: ''}
    } else {
        setErrors = {...errors, image: '*El link no pertenece a una inagen'}
    };

    if (/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/.test(form.updated)) {
        setErrors = {...errors, updated: ''}
    } else {
        setErrors = {...errors, updated: '*Fecha inválida'}
    };

    if (/[\w\u00C0-\u017F]+/g.test(form.description)) {
        setErrors = {...errors, description: ''}
    } else {
        setErrors = {...errors, description: '*Debes agregar una descripción del juego'}
    };  
   
};
   

 useEffect(()=> {
    validate()
}, [form]);

return (
        <div> 
            <h1>Crear Videojuego</h1>
            <form onSubmit={handlerSubmit} >
                <label htmlFor="name">Nombre: </label>
                <input id='name' value={form.name} type="text" name='name' placeholder="Escribir nombre" onChange={handlerFormChange} />
                {errors.name !== '' ? <span>{errors.name}</span> : ''}
                
                <hr />
                <label htmlFor="platform">Plataformas: </label>
                <input id='platform' value={form.platform} type="text" name='platform' placeholder="Inserte las plataformas de jugabilidad" onChange={handlerFormChange} />
                {errors.platform !== '' ? <span>{errors.platform}</span> : ''}
                <hr />
                <label htmlFor="genres">Géneros: </label>
                <input id='genres' value={form.genres} type="text" name='genres' placeholder="Inserte los géneros" onChange={handlerFormChange} />
                {errors.genres !== '' ? <span>{errors.genres}</span> : ''}
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
        