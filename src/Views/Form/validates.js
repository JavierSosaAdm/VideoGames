
export const validates = async (form, errors, setErrors) => {    
            
   

    if (form.name) {
        if (/^[a-zA-Z0-9\s]+$/.test(form.name)) {
            setErrors(prev =>({...prev, name: ''}))
        } else {
            setErrors(prev => ({...prev, name: '*Nombre invalido'}))
        }
    }
          
    if (form.platform) {
        if (/^[a-zA-Z0-9\s]+$/.test(form.platform)) {
            setErrors (prev => ({...prev, platform: ''})) 
        } else {
            setErrors (prev => ({...prev, platform: '*Plataforma invalida'})) 
        };
    }            
    
    if (form.genres) {
        if (/^[a-zA-Z0-9\s]+$/.test(form.genres)) {
            setErrors (prev => ({...prev, genres: ''})) 
        } else {
            setErrors (prev => ({...prev, genres: '*Elija al menos un género'})) 
        };
    }

    if (form.rating) {
        if (/^(?:10(?:\.0{1,2})?|[0-9](?:\.\d{1,2})?)$/.test(form.rating)) {
            setErrors (prev => ({...prev, rating: ''})) 
        } else {
            setErrors ( prev => ({...prev, rating:'*Número inválido'}))
        };
    }   
    
    if (form.image) {
        if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(form.image)) {
            setErrors (prev => ({...prev, image: ''})) 
        } else {
            setErrors (prev => ({...prev, image: '*El link no pertenece a una inagen'})) 
        };
    }

    if (form.updated) {
        if (/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/.test(form.updated)) {
            setErrors (prev => ({...prev, updated: ''})) 
        } else {
            setErrors (prev => ({...prev, updated: '*Fecha inválida'})) 
        };
    }

    if (form.description) {
        if (/[\w\u00C0-\u017F]+/g.test(form.description)) {
            setErrors (prev =>({...prev, description: ''})) 
        } else {
            setErrors (prev => ({...prev, description: '*Debes agregar una descripción del juego'})) 
        };     
    }    
};

