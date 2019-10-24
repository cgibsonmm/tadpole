'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    word: DataTypes.STRING
  }, {});
  Keyword.associate = function (models) {
    Keyword.belongsToMany(models.Sentence, {
      through: 'KeywordSentences',
      as: 'sentences',
      foreignKey: 'keywordId',
      otherKey: 'sentenceId'
    }),
      Keyword.belongsToMany(models.BrandStatement, {
        through: 'KeywordBrandStatments',
        foreignKey: 'keyword_id',
      })
  };
  return Keyword;
};

