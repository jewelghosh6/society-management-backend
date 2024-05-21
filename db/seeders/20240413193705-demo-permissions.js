'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions',
      [
        { permission_name: 'can_add_new_member', description: "some description" },
        { permission_name: 'can_approve_new_member_joining_request', description: "some description" },
        { permission_name: 'can_manage_visitor_activity', description: "some description" },
        { permission_name: 'can_generate_various_bills', description: "some description" },
        { permission_name: 'can_pay_various_bills', description: "some description" },
        { permission_name: 'can_view_various_bills', description: "some description" },
        { permission_name: 'can_pay_own_flat_bills', description: "some description" },
        { permission_name: 'can_raise_complaint/suggestions', description: "some description" },
        { permission_name: 'can_resolve_complaint/suggestions', description: "some description" },
        { permission_name: 'can_view_complaint/suggestions', description: "some description" },
        { permission_name: 'can_add_new_flat', description: "some description" },
        { permission_name: 'can_view_single_flat_details', description: "some description" },
        { permission_name: 'can_view_all_flats', description: "some description" },
        { permission_name: 'can_allot_new_flats', description: "some description" },
        { permission_name: 'can_create_meetings', description: "some description" },
        { permission_name: 'can_receive_meeting_notification', description: "some description" },
        { permission_name: 'can_give_access_to_flat_tenants', description: "some description" },
        { permission_name: 'have_access_to_group_chat', description: "some description" },


      ]
    )
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('permissions', null, {});
  }
};
