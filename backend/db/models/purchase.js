"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Purchase.belongsTo(models.User, {
        foreignKey: 'userId',
        // onDelete: 'CASCADE'
      })
    }
  }
  Purchase.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      store: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Purchase",
    }
  );
  return Purchase;
};
