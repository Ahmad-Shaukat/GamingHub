'use strict';
const {ListGames} = require('../models')

/** @type {import('sequelize-cli').Migration} */
let options = {}
if (process.env.Node_ENV === 'production') {
  options.schema = process.env.schema
}


module.exports = {
  async up (queryInterface, Sequelize) {
  await ListGames.bulkCreate([
    {
      listId: 1,
      name: 'Call Of Duty',
      description: 'Call of Duty: Advanced Warfare" is a futuristic first-person shooter set in a world dominated by private military corporations. Players control Jack Mitchell, a soldier with advanced exoskeleton suits, battling through a single-player campaign uncovering a conspiracy.'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
