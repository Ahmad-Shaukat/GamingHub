'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListGames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListGames.belongsTo(models.List, {
        foreignKey: 'listId'
      })
    }
  }
  ListGames.init({
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagePath : {
      type: DataTypes.STRING,
      allowNull: false
    }


  }, {
    sequelize,
    modelName: 'ListGames',
  });
  return ListGames;
};