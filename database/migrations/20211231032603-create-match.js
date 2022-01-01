'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matches', {
        id: {
            autoIncrement: true, 
            primaryKey: true,
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        date: {
            type: Sequelize.STRING, 
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
    await queryInterface.dropTable('Matches');
  }
};