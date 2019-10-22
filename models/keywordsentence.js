'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordSentence = sequelize.define('KeywordSentence', {
    keywordId: DataTypes.UUID,
    sentenceId: DataTypes.UUID
  }, {});
  KeywordSentence.associate = function (models) {
    KeywordSentence.belongsTo(models.Keyword, {
      foreignKey: 'keywordId'
    })
    KeywordSentence.belongsTo(models.Sentence, {
      foreignKey: 'sentenceId'
    })
  };
  return KeywordSentence;
};