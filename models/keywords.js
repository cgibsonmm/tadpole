'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keywords = sequelize.define('Keywords', {
    word: DataTypes.STRING,
    upvotes: DataTypes.INTEGER
  }, {});
  Keywords.associate = function(models) {
    // associations can be defined here
    // I Michael Ion used this source and guide for as a tool
    // to help with associations
    //https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102
    Keywords.belongsToMany(models.sentence, {
      through:'KeywordSentences',
      as: 'keywords',
      foreignKey: 'sentence_id'
    })

  };
  return Keywords;
};