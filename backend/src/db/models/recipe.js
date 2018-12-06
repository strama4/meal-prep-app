'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      get: function() {
        return JSON.parse(this.getDataValue('ingredients'));
      },
      set: function(val) {
        return this.setDataValue('ingredients', JSON.stringify(val));
      },
      allowNull: false
    }
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};