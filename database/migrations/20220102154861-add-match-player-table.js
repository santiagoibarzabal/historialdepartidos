'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Match_Player', {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        player_id: {
            type: Sequelize.INTEGER.UNSIGNED, 
            foreignKey: true, 
        },
        match_id: {
            type: Sequelize.INTEGER.UNSIGNED, 
            foreignKey: true, 
        },
        difference: {
            type: Sequelize.INTEGER, 
        },
        created_at: {
            type: Sequelize.DATE, 
        }, 
        updated_at: {
            type: Sequelize.DATE, 
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Match_Player');
  }
};
