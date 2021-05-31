'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    weight: DataTypes.NUMBER,
    gender: DataTypes.STRING,
    breed: DataTypes.STRING,
    storId: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    hasShots: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};