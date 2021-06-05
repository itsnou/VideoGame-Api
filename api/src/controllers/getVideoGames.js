const getAllApi = require('./getAllGamesAPI');
const getDb = require('./getAllGamesDB');

const getVideoGames = async() =>{
    let gamesApi = await getAllApi;
    let gamesDb = await getDb();
    let allGames = gamesApi.concat(gamesDb);
    return allGames;
}

module.exports = getVideoGames;