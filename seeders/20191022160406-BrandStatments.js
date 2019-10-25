'use strict';
const statements = [
  {
    statement: 'I am funny. I am happy',
    rank: 1
  },
  {
    statement: 'I am funny. I am happy',
    rank: 89
  },
  {
    statement: 'I am funny. I am happy',
    rank: 1
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
