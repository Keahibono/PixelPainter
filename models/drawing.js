'use strict';
module.exports = function(sequelize, DataTypes) {
  var Drawing = sequelize.define('Drawing', {
    data: DataTypes.JSON,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Drawing;
};