'use strict';
const {Purchase} = require('../models')
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
let options = {}
if (process.env.Node_ENV === 'production') {
  options.schema = process.env.schema
} 

module.exports = {
  async up (queryInterface, Sequelize) {
    await Purchase.bulkCreate([
      {
        userId: 1,
        category: 'Shopping',
        name: 'BestBuy',
        date: new  Date(),
        amount: 200
      },
      {
        userId: 1,
        category: 'Food',
        name: 'Burger King',
        date: new  Date(),
        amount: 36.75
      },
      {
        userId: 2,
        category: 'Shopping',
        name: 'Macys',
        date: new  Date(),
        amount: 14.50
      },
      {
        userId: 2,
        category: 'Bills',
        name: 'Electricity Bill',
        date: new  Date(),
        amount: 60.75
      }

    ])
   
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Purchases'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: {
        [Op.in]: [1,2]
      }
    }, {})
  }
};
