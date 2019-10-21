'use strict';
module.exports = (sequelize, DataTypes) => {
  const Keywords = sequelize.define('Keywords', {
    word: DataTypes.STRING,
    upvotes: DataTypes.INTEGER
  }, {});
  Keywords.associate = function(models) {
    // associations can be defined here
  };
  return Keywords;
};