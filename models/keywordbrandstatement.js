'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordBrandStatement = sequelize.define('KeywordBrandStatement', {
    statementId: DataTypes.INTEGER,
    brandStatementId: DataTypes.INTEGER
  }, {});
  KeywordBrandStatement.associate = function (models) {
    KeywordBrandStatement.belongsTo(models.Keyword, {
      foreignKey: 'keywordId'
    })
    KeywordBrandStatement.belongsTo(models.BrandStatement, {
      foreignKey: 'brandStatementId'
    })
  };
  return KeywordBrandStatement;
};