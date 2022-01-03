const playersService = require('../services/players');
const dayjs = require('dayjs');

const db = require('../database/models');

const saveMatchData = async (players, difference, date) => {
        const match = await db.Matches.create({ date: date});
        for (const key in players) {
            const netDifference = key.indexOf('winner') != -1 ? difference : -difference;
            const player = await playersService.savePlayerData(players, key, netDifference);
            db.MatchPlayer.create({
                    match_id: match.id, 
                    player_id: player.id,
                    difference: netDifference
            })
        }; 
};

const findAll = () => {
    return db.Matches.findAll();
};

module.exports = {
    saveMatchData, 
    findAll,
}