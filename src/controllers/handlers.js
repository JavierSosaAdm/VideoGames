const { getInfo } = require('./controllers')

const getHandler = async (req, res) => {
    try {
        const info = await getInfo();
        res.status(200).json(info)
    } catch (error) {
        res.status(400).send(error.message)
    }
};


module.exports = { getHandler };