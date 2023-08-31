const { Router } = require('express');
const { getGenreHandler } = require('../controllers/handlers')

const genreRoute = Router(); 

genreRoute.get('./genre', getGenreHandler)




module.exports = { genreRoute };