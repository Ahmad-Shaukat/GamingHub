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
        name: 'Ipad',
        store: 'BestBuy',
        date: new  Date()
      },
      {
        userId: 1,
        category: 'Food',
        name: 'BigMac',
        store: 'Burger King',
        date: new  Date()
      },
      {
        userId: 2,
        category: 'Shopping',
        name: 'Curtains',
        store: 'Macys',
        date: new  Date()
      },
      {
        userId: 2,
        category: 'Bills',
        name: 'Electricity Bill',
        date: new  Date()
      }

    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});

  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
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
