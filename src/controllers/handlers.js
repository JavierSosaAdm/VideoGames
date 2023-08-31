const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { create, getInfo, getByName, getById, getGenre } = require('./controllers');
require('dotenv').config();
const { API_URL, API_KEY } = process.env;


const postHandler = async (req, res) => {}  

const getHandler = async (req, res) => {
    try {
        const response = await getInfo(); 
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

const nameHandler = async (req, res) => {};

const idHandler = async (req, res) => {};

const getGenreHandler = async (req, res) => {
    try {
        const response = await getGenre();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = { postHandler, getHandler, nameHandler, idHandler, getGenreHandler };