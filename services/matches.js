const playersService = require('../services/players');
const db = require('../database/models');

const saveMatchData = async (players, difference) => {
    for (const key in players) {
        const existingPlayer = await playersService.findByName(players[key]);
        const playerIsWinner = key.indexOf('winner') != -1;
        const netDifference = playerIsWinner ? difference : -difference;
        if (existingPlayer) {
            existingPlayer.difference = existingPlayer.difference + netDifference;
            existingPlayer.total_played = existingPlayer.total_played + 1;
            db.Players.update({
                difference: existingPlayer.difference,
                total_played: existingPlayer.total_played,
            }, 
            {
                where: {
                    id: existingPlayer.id
                }
            })
            .catch(error => {
                console.log(error);  
              });;
        }
        if (!existingPlayer) {
            db.Players.create({
                name: players[key],
                difference: netDifference, 
                total_played: 1
            })
            .catch(error => {
              console.log(error);  
            });
        }
    }      
}

module.exports = {
    saveMatchData
}