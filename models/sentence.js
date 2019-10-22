'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sentence = sequelize.define('Sentence', {
    string: DataTypes.TEXT
  }, {});
  Sentence.associate = function (models) {
    Sentence.belongsToMany(models.Sentence, {
      through: 'KeywordSentence',
      as: 'sentences'
    })
  };
  return Sentence;
};