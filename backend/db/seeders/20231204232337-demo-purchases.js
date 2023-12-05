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
        categoryId: 1,
        name: 'Ipad',
        store: 'BestBuy',
        date: new  Date(),
        type: 'cash'
      },
      {
        userId: 1,
        categoryId: 2,
        name: 'BigMac',
        store: 'Burger King',
        date: new  Date(),
        type: 'credit'
      },
      {
        userId: 2,
        categoryId: 3,
        name: 'Curtains',
        store: 'Macys',
        date: new  Date(),
        type: 'credit'
      },
      {
        userId: 2,
        categoryId: 4,
        name: 'Long Coat',
        store: 'G-Raw',
        date: new  Date(),
        type: 'credit'
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
