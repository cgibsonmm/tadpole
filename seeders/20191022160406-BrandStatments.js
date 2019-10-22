'use strict';
const statements = [
  {
    statement: 'I am funny. I am happy'
  },
  {
    statement: 'I am funny. I am happy'
  },
  {
    statement: 'I am funny. I am happy'
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BrandStatements', statements, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
