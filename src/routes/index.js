const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { videogameRoute } = require('./videogameRoute')
const { genreRoute } = require('./genreRoute')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', videogameRoute);
router.use('/', genreRoute);


module.exports = router;
