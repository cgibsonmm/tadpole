'use strict';
module.exports = (sequelize, DataTypes) => {
  const KeywordSentences = sequelize.define('KeywordSentences', {
    keyword_id: DataTypes.INTEGER,
    sentence_id: DataTypes.INTEGER
  }, {});
  KeywordSentences.associate = function(models) {
    // associations can be defined here
  };
  return KeywordSentences;
};