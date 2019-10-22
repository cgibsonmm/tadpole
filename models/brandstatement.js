'use strict';
module.exports = (sequelize, DataTypes) => {
  const BrandStatement = sequelize.define('BrandStatement', {
    statement: DataTypes.TEXT
  }, {});
  BrandStatement.associate = function (models) {
    BrandStatement.belongsToMany(models.Keyword, {
      through: 'KeywordBrandStatement',
      as: 'keywords',
      foreignKey: 'brandstatementId',
      otherkey: 'keywordId'
    })
  };
  return BrandStatement;
};