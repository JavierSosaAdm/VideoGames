const getInfo = async () => {

    const gameApi = await axios.get(`${API_URL}/games?key=${API_KEY}`);
    const results = gameApi.data.results;
    const infoGames = results.map((game) => {
        const minName = game.name
        return {
            id: game.uuid,
            name: minName,
            description: game.description,
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
    
    return infoGames;
};