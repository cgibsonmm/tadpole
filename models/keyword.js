'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    word: DataTypes.STRING
  }, {});
  Keyword.associate = function (models) {
    // associations can be defined here
    Keyword.belongsToMany(models.Sentence, {
      through: 'KeywordSenteces',
      as: 'sentences'
    })
  };
  return Keyword;
};