const { matches } = require('./matches');
const { players } = require('./players');


module.exports = (sequelize, dataTypes) => {
    const alias = 'MatchPlayer';
    const cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER, 
            allowNull: false
        },
        match_id: {
            type: dataTypes.INTEGER,
            references: {
                model: matches,
                key: 'id'
            }
        },
        player_id: {
            type: dataTypes.INTEGER,
            references: {
                model: players,
                key: 'id'
            }
        },
        difference: {
            type: dataTypes.INTEGER, 
        },
        created_at: {
            type: dataTypes.DATE, 
        }, 
        updated_at: {
            type: dataTypes.DATE, 
        }
    };
    const config = {
        tableName: 'Match_Player', 
        timestamps: false
    }

    const MatchPlayer = sequelize.define(alias, cols, config);
      
    return MatchPlayer;
}