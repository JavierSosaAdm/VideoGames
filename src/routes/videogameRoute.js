const { Router } = require('express');
const { postHandler, getHandler, nameHandler, idHandler } = require('../controllers/handlers')

const videogameRoute = Router();

videogameRoute.post('/videogames', postHandler);
videogameRoute.get('/videogames', getHandler);
videogameRoute.get('/search', nameHandler);
videogameRoute.get('/videogames/:id', idHandler);

module.exports = { videogameRoute };

