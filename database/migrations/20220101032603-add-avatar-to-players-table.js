'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Players', 'avatar', 
    { 
        type: Sequelize.STRING,
        alowNull: true,
    }
    );
  },  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropColumn('Players', 'avatar');
  }
};