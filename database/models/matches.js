module.exports = (sequelize, dataTypes) => {
    const alias = 'Matches';
    const cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER, 
            allowNull: false
        },
        date: {
            type: dataTypes.DATE, 
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE, 
        }, 
        updated_at: {
            type: dataTypes.DATE, 
        }
    };
    const config = {
        tableName: 'Matches', 
        timestamps: false
    }
    const Match = sequelize.define(alias, cols, config);

    Match.associate = (models) => {
        Match.belongsToMany(models.Players,{
            as: 'players', 
            through: models.MatchPlayer,
            foreignKey: 'match_id',
            otherKey: 'player_id', 
            timestamps: false,
        })
    }
    
    return Match;
}