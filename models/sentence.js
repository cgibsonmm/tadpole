'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sentence = sequelize.define('Sentence', {
    word: DataTypes.STRING
  }, {});
  Sentence.associate = function(models) {
    // associations can be defined here
    // I Michael Ion used this source and guide for as a tool
    // to help with associations
    //https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102
    Sentence.belongsToMany(models.keywords, {
      through: 'KeywordSentences',
      as: 'sentences',
      foreignKey: 'sentence_id'
    })
  };
  return Sentence;
};