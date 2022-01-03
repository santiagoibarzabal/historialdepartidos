'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Matches', 'date', 
    { 
        type: Sequelize.DATE,
        alowNull: true,
    }
    );
  },  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.change('Matches', 'date', 
    { 
        type: Sequelize.STRING,
        alowNull: true,
    });
  }
};
