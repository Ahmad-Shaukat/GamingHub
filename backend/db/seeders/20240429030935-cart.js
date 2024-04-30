'use strict';
const {Cart} = require('../models')
/** @type {import('sequelize-cli').Migration} */
let options = {}

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.schema
}
module.exports = {
  async up (queryInterface, Sequelize) {
   await Cart.bulkCreate([
    {
      userId:1,
      total: 10
    },
    {
      userId: 2,
      total:20
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Cart'
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      userId: {
        [Op.in]: [1,2]
    }
    })
  }
};
