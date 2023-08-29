const { Router } = require('express');
const { getHandler } = require('../controllers/handlers')

const videogameRoute = Router();

videogameRoute.get('/', getHandler)

module.exports = { videogameRoute };

