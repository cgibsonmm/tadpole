'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordSentence = sequelize.define('KeywordSentence', {
    keywordId: DataTypes.UUID,
    sentenceId: DataTypes.UUID
  }, {});
  KeywordSentence.associate = function(models) {
    // associations can be defined here
  };
  return KeywordSentence;
};