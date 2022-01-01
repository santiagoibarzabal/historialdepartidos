const db = require('../database/models');


const playersService = {
    findAll: () => {
        return db.Players.findAll({
            order: [
                [`difference`, 'DESC'],
            ]
        });
    },
    findOne: (id) => {
        return db.Players.findByPk(id);
    },
    findByName: (name) => {
        return db.Players.findOne({where: { name: name }})
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
