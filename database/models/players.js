module.exports = (sequelize, dataTypes) => {
    const alias = 'Players';
    const cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: dataTypes.INTEGER, 
            allowNull: false
        },
        name: {
            type: dataTypes.STRING, 
            allowNull: false
        }, 
        total_played: {
            type: dataTypes.INTEGER, 
            allowNull: false
        }, 
        difference: {
            type: dataTypes.INTEGER, 
            allowNull: false
        }, 
        avatar: {
            type: dataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: dataTypes.DATE, 
        }, 
        updated_at: {
            type: dataTypes.DATE, 
        }
    };
    const config = {
        tableName: 'Players', 
        timestamps: false
    }
    const Player = sequelize.define(alias, cols, config);

    Player.associate = (models) => {
        Player.belongsToMany(models.Matches,{
            as: 'matches', 
            through: 'match_player',
            foreignKey: 'match_id',
            otherKey: 'player_id', 
            timestamps: false,
        })
    }
    
    return Player;
}