'use strict';
module.exports = (sequelize, DataTypes) => {
  const BrandStatement = sequelize.define('BrandStatement', {
    statement: DataTypes.TEXT
  }, {});
  BrandStatement.associate = function (models) {
    BrandStatement.belongsToMany(models.Keyword, {
      through: 'KeywordBrandStatements',
      foreignKey: 'brandstatement_id',
      // otherkey: 'KeywordId'
    })
  };
  return BrandStatement;
};