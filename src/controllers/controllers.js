const axios = require('axios');
const { Videogame, Genre } = require('../db')
require('dotenv').config();
const { API_URL, API_KEY } = process.env;
const size = 25;

const create = async ({ name, description, platform, image, updated, rating, genres }) => {
    const newGame = await axios.post()
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
    return gamesAPI;
};

const getByName = async (name) => {
    const names = await axios.get(`${API_URL}/games/${name}?key=${API_KEY}`);
};

const getById = async (id) => {
    if (isNaN(id)) {

    } else {
        const detail = await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`)
        const description = detail.description.map((detail) => {
            return {
                id: detail.id,
                name: detail.name,
                description: detail.description,
                platform: detail.platforms.map((plat) => {
                    return plat.platform.name
                }),
                image: detail.background_image,
                updated: detail.updated,
                rating: detail.rating,
                genres: detail.genres.map((gen) => {
                    return gen.name;
                })
            }
        })
        return description;
    }
};

const getGenre = async () => {
    const genreAPI = await axios.get(`${API_URL}/genre?key=${API_KEY}`);
    const infoGenres = genreAPI.data
    const arrayGen = infoGenres.results.map((genre) => {
        return {
            id: genre.uuid,
            name: genre.name
        }
    });
    return [...arrayGen]
};



module.exports = { create, getInfo, getByName, getById, getGenre }

// const gameAPI = await axios.get(`${API_URL}/games?key=${API_KEY}`)
// .then();
// const results = gameAPI.data.results;
// if (results.length >= 50) {

//     const infoGames = results.map((game) => {

//         const minName = game.name
//         return {
//             id: game.id,
//             name: minName,
//             description: getDescription(),
//             platform: game.platforms.map((plat) => {
//                 return plat.platform.name
//             }),
//             image: game.background_image,
//             updated: game.updated,
//             rating: game.rating,
//             genres: game.genres.map((gen) => {
//                 return gen.name;
//             })
//         }
//     })
//     return infoGames; 
// };
