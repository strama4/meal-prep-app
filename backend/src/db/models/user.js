'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {msg: 'Must be a valid email'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};