const { Router } = require('express');
const { getGenreHandler } = require('../controllers/handlers')

const genreRoute = Router(); 

genreRoute.get('/genres', getGenreHandler)




module.exports = { genreRoute };