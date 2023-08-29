const axios = require('axios');
require('dotenv').config();
const { API_URL, API_KEY } = process.env;

const getInfo = async () => {

    const response = await axios.get(`${API_URL}?key=${API_KEY}`);
    let infoApi = response.data.map((game) => {
        if(game) {
            return {
                name: game.name,
                description: game.description,
                platform: game.platform,
                image: game.image,
                updated: game.updated,
                rating: game.rating
            }
        }
    }) 
    const info = await infoApi.findAll({includes: genres});
    const infoDB = info.map((game) => {
        return {
            id: game.uuid,
            name: game.name,
            description: game.description,
            platform: game.parent_platforms.map((platforms) => {
                return platforms.platform.name
            }).toLowerCase(),
            genres: game.genres.map((genre) => {
                return genre.name
            }).toLowerCase(),
        }
    })
    
};

