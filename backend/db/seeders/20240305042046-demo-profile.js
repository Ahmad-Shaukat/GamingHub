'use strict';
const {Profile} = require('../models')
/** @type {import('sequelize-cli').Migration} */
let options = {}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
module.exports = {
  async up (queryInterface, Sequelize) {
    await Profile.bulkCreate([
      {
        userId:1,
        salary:5000
      },
      {
        userrId: 2,
        salary: 4000
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
    })
  }
};
