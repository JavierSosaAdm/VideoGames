const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { create, getInfo, getByName, getById, getGenre } = require('./controllers');
require('dotenv').config();
const { API_URL, API_KEY } = process.env;


const postHandler = async (req, res) => {
    const { name, description, platform, image, updated, rating, genres } = req.body;
    try {
        
        const response = await create(name, description, platform, image, updated, rating, genres)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}  

const getHandler = async (req, res) => {
    try {
        const response = await getInfo(); 
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

const nameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await getByName(name);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

const idHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getById(id);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getGenreHandler = async (req, res) => {
    try {
        const response = await getGenre();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = { postHandler, getHandler, nameHandler, idHandler, getGenreHandler };