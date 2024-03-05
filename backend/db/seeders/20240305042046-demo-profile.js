'use strict';
const { mapFinderOptions } = require('sequelize/types/utils');
const {Profile} = require('../models')
/** @type {import('sequelize-cli').Migration} */
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
    
  }
};
