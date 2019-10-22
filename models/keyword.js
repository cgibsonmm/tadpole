'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    word: DataTypes.STRING
  }, {});
  Keyword.associate = function (models) {
    // associations can be defined here
    Keyword.belongsToMany(models.Sentence, {
      through: 'KeywordSentences',
      as: 'sentences',
      foreignKey: 'keywordId',
      otherKey: 'sentenceId'
    }),
      Keyword.belongsToMany(models.BrandStatement, {
        through: 'KeywordBrandStatment',
        as: 'brandStatment',
        foreignKey: 'keywordId',
        otherKey: 'brandStatementId'
      })
  };
  return Keyword;
};