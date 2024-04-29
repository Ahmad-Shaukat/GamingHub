'use strict';
const {List} = require('../models')


/** @type {import('sequelize-cli').Migration} */

let options = {}
if (process.env.Node_ENV === 'production') {
  options.schema = process.env.schema
}
module.exports = {
  async up (queryInterface, Sequelize) {
   await List.bulkCreate([
    {
      userId: 1,
      name: 'Action'

    },
    {
      userId: 2,
      name: 'Multiplayer'
    },
    { 
      userId: 1,
      name:'Multiplayer'
    },
    {
      userId: 2,
      name: 'Campaign'
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      userId: {
        [Op.in]:[1,2]
      }
    }, {})

  }
};
