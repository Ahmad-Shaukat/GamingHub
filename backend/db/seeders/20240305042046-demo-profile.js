'use strict';
const {Profile} = require('../models')
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs')

let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.schema
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await Profile.bulkCreate([
      {
        userId:1,
        wallet: 40
        
      },
      {
        userId: 2,
        wallet: 20
        
      }
    ])
 
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Profiles'
    const Op = Sequelize.Op
    
    return queryInterface.bulkDelete(options, {
      userId: {
        [Op.in]: [1, 2]
      }
    }, {})
  }
};
