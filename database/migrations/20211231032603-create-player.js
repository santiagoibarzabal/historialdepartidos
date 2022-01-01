'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        name: {
            type: Sequelize.STRING, 
            allowNull: false
        }, 
        total_played: {
            type: Sequelize.INTEGER, 
            allowNull: false
        }, 
        difference: {
            type: Sequelize.INTEGER, 
            allowNull: false
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
    await queryInterface.dropTable('Players');
  }
};