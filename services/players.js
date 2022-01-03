const db = require('../database/models');


const playersService = {
    findAll: () => {
        return db.Players.findAll({
            include: [
                {
                    association: 'matches', 
                }, 
            ],
            order: [
                [`difference`, 'DESC'],
            ]
        });
    },
    findByPk: (id) => {
        return db.Players.findByPk(id, {
            include: [
                {
                    association: 'matches',
                }
            ],
            order: [
                ['matches', 'date', 'ASC'],
            ]
            
        });
    },
    findByName: (name) => {
        return db.Players.findOne({where: { name: name }})
    },
    saveExistingPlayer: (existingPlayer, netDifference) => {
        existingPlayer.difference = existingPlayer.difference + netDifference;
        existingPlayer.total_played = existingPlayer.total_played + 1;
        return existingPlayer.update(
            {
            difference: existingPlayer.difference,
            total_played: existingPlayer.total_played,
            },
            {
                where: {
                    id: existingPlayer.id
                },
            },
        )
    },
    saveNewPlayer: (name, netDifference) => {
        return db.Players.create({
            name: name,
            difference: netDifference, 
            total_played: 1
        });
    },
    savePlayerData: async (players, key, netDifference) => {
        const existingPlayer = await playersService.findByName(players[key]);
        if (existingPlayer) {
            return playersService.saveExistingPlayer(existingPlayer, netDifference)
        }
        if (!existingPlayer) {
            return playersService.saveNewPlayer(players[key], netDifference)
        }
    },
    updatePlayerData: (player) => {
        return db.Players.findOne({where: { name: player.name }})
        .then((result) => {
            db.Players.update({
                difference: Number(player.difference),
                total_played: player.total_played,
                avatar: player.avatar,
            },{
                where: {
                    id: result.id
                }
            })

        })
    },
    deletePlayer: (playerId) => {
        return db.Players.destroy({
            where: {
                id: playerId
            }
        });
    }
}

module.exports = playersService;
