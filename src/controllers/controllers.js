const axios = require('axios');
// const express = require('express');
const { Videogame, Genre } = require('../db')
require('dotenv').config();
const { API_URL, API_KEY } = process.env;

const create = async ({ name, description, platform, image, updated, rating, genres }) => {};

const getDescription = async (id) => {
    const description = await axios.get(`${API_URL}/games/${id}?key=${API_KEY}`)
    .then((response) => {
        return 'response.description'
    } )
    
   
    return description;  
};
const getInfo = async () => {

    const gameAPI = await axios.get(`${API_URL}/games?key=${API_KEY}`);
    const results = gameAPI.data.results;
    const infoGames = results.map((game) => {
        const minName = game.name
        return {
            id: game.id,
            name: minName,
            description: getDescription(),
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
    
    return [...infoGames]
};

const getByName = async () => {};

const getById = async () => {};

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

