const axios = require('axios');
const { Sequelize } = require("sequelize");
const { Videogame, Genre } = require('../db')
require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const size = 25;
const Op = Sequelize.Op;

const create = async (name, description, platform, image, updated, rating, genres) => {
    
    const newGame = await Videogame.create({
        
            name,
            description,
            platform,
            image,
            updated,
            rating,
            created: true
        
    });

    if (Array.isArray(genres)) {
        for (const genre of genres) {
            const genresDB = await Genre.findOne({
                where: {
                    id: genre.id
                }
            })
            await newGame.addGenre(genresDB);
        }
    }
    return newGame;
};

const getInfo = async () => {
    
    const resp1 = (await axios.get(`${API_URL}/games?page_zise=${size}&page=1&key=${API_KEY}`)).data.results;
    const resp2 = (await axios.get(`${API_URL}/games?page_zise=${size}&page=2&key=${API_KEY}`)).data.results;
    const resp3 = (await axios.get(`${API_URL}/games?page_zise=${size}&page=3&key=${API_KEY}`)).data.results;
    const resp4 = (await axios.get(`${API_URL}/games?page_zise=${size}&page=4&key=${API_KEY}`)).data.results;
    const gamesAPI = [...resp1, ...resp2, ...resp3, ...resp4].map((game) => {
        
        return {
            id: game.id,
            name: game.name,
            platform: game.platforms.map((plat) => {
                return plat.platform.name
            }),
            image: game.background_image,
            updated: game.updated,
            rating: game.rating,
            genres: game.genres.map((gen) => {
                return gen.name;
            })
        }     
    })
    
    const gamesBD = await Videogame.findAll();
    return [...gamesAPI, ...gamesBD];
};

const getByName = async (name) => {
    if (!name) {
        return 'Debe escribir un nombre válido';
    }; 
        const namesDB = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
    
        const response = await axios.get(`${API_URL}/games?search=${name}&key=${API_KEY}`);
        const namesAPI = response.data.results;
        
        const AllGames = [...namesDB, ...namesAPI];
        
        if (AllGames.length === 0) {
            return 'No se encontraron juegos con ese nombre'
        } else {
            return AllGames.slice(0, 15);
        }
};

const getById = async (id) => {
    if (isNaN(id)) {
        const gameID = await Videogame.findOne({
            where: {
            id: id,
            },
            include: [
                {
                    model: Genre,
                    as: 'genres',
                    attributes: ["id", "name"],
                    through: { attributes: [] }
                }
            ]
        })
        return gameID;
    } else {
        const detail = (await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`)).data
        if (detail) {
            return {
                id: detail.id,
                name: detail.name,
                description: detail.description,
                platform: detail.platforms ? detail.platforms.map((plat) => {
                    return plat.platform.name
                }): [],
                image: detail.background_image,
                updated: detail.updated,
                rating: detail.rating,
                genres: detail.genres.map((gen) => {
                    return gen.name;
                })
            };
        };
    };
};

const getGenre = async () => {
    const genres = (await axios.get(`${API_URL}/genres?key=${API_KEY}`)).data.results;
    const genresAPI = [...genres].map((gen) =>{
        return {
            name: gen.name,
        }
    })
    const genresDB = await Genre.bulkCreate(genresAPI);
    return [...genresDB];
};

module.exports = { create, getInfo, getByName, getById, getGenre };
   