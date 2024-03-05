'use strict';
const { mapFinderOptions } = require('sequelize/types/utils');
const {Profile} = require('../models')
/** @type {import('sequelize-cli').Migration} */
let options = {}
if (process.env.Node_ENV === 'production') {
  options.schema = process.env.schema
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
    options.tablename = 'Profiles'
    const Op = Sequelize.Op
    
    return queryInterface.bulkDelete(options, {
      userId: {
        [Op.in]: [1, 2]
      }
    })
  }
};
