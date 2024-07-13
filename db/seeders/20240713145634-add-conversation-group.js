'use strict';

const { generateRandomString } = require('../../utils/randomStringGeneartor');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('conversations', [{
      conversation_name: 'Society Group Official',
      conversation_type: "group",
      event_key: generateRandomString(10),
      is_public: true
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
