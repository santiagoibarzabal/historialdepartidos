const { getDataByFilename } = require('../lib/jsonHelper');
const { saveDataToFile } = require('../lib/jsonHelper');

const players = getDataByFilename('PlayersDatabase'); 

const findAll = () => {
    return players;
}

const findOne = (id) => {
    return players.find((one) => one.id == id);
}

const updatePlayerData = (player) => {
    const playerToUpdate = players.find((player) => player.name == player.name);
    if (playerToUpdate) {
        playerToUpdate.difference = Number(player.difference);
        playerToUpdate.total_played = player.total_played;;
    }
    saveDataToFile(players, 'PlayersDatabase');
}

const deletePlayer = (playerId) => {
    const index = players.find((player) => player.id == playerId);
    players.splice(index, 1);
    saveDataToFile(players, 'PlayersDatabase');
}


module.exports = {
    updatePlayerData, 
    deletePlayer, 
    findOne, 
    findAll
}