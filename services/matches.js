const playersService = require('../services/players');
const { saveDataToFile } = require('../lib/jsonHelper');

const playersData = playersService.findAll(); 

const saveMatchData = (players, difference) => {
    const existingPlayers = [];
    for (const key in players) {
        const existingPlayer = playersData.find((player) => player.name == players[key]);
        const playerIsWinner = key.indexOf('winner') != -1;
        const netDifference = playerIsWinner ? difference : -difference;
        if (existingPlayer) {
            existingPlayer.difference = existingPlayer.difference + netDifference;
            existingPlayer.total_played = existingPlayer.total_played + 1;
            existingPlayers.push(existingPlayer);
        }
        if (!existingPlayer) {
            playersData.push({
                id: playersData.length + 1,
                name: players[key],
                difference: netDifference, 
                total_played: 1
            });
        }
    }      
    saveDataToFile(playersData, 'PlayersDatabase');
}

module.exports = {
    saveMatchData
}