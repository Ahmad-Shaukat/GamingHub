'use strict';
const {Category} = require('../models')
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
let options = {}
if (process.env.Node_ENV === 'production') {
  options.schema = process.env.schema
} 

module.exports = {
  async up (queryInterface, Sequelize) {
    await Category.bulkCreate(
      [
        {
          name: 'electronic'
        },
        {
          name: 'food'
        },
        {
          name: 'household'
        },
        {
          name: 'clothing'
        },
        {
          name: 'medical'
        }
      ]
    ) 
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Categories'
    const Op = Sequelize.Op

    return queryInterface.bulkDelete(options, {
      name: {
        [Op.in]: ['electronic', 'food', 'house', 'clothing', 'medical']
      }
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};
