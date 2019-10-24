'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordBrandStatement = sequelize.define('KeywordBrandStatement', {
    keywordId: DataTypes.INTEGER,
    brandStatementId: DataTypes.INTEGER
  }, {});
  KeywordBrandStatement.associate = function (models) {
    KeywordBrandStatement.belongsTo(models.Keyword, {
      foreignKey: 'keyword_id',
      targetKey: 'id',
      as: 'Keyword'
    })
    KeywordBrandStatement.belongsTo(models.BrandStatement, {
      foreignKey: 'brandstatement_id',
      targetKey: 'id',
      as: 'BrandStatement'
    })
  };
  return KeywordBrandStatement;
};