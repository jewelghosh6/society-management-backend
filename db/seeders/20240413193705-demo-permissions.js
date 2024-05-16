'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions',
      [
        { id: 1, permission_name: 'can_add_new_member', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 2, permission_name: 'can_approve_new_member_joining_request', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 3, permission_name: 'can_manage_visitor_activity', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 4, permission_name: 'can_generate_various_bills', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 5, permission_name: 'can_pay_various_bills', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 6, permission_name: 'can_view_various_bills', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 7, permission_name: 'can_raise_complaint/suggestions', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 8, permission_name: 'can_resolve_complaint/suggestions', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 9, permission_name: 'can_view_complaint/suggestions', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 10, permission_name: 'can_add_new_flat', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 11, permission_name: 'can_view_single_flat_details', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 12, permission_name: 'can_view_all_flats', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 13, permission_name: 'can_allot_new_flats', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 14, permission_name: 'can_create_meetings', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 15, permission_name: 'can_receive_meeting_notification', description: "some description", created_at: new Date(), updated_at: new Date() },
        { id: 16, permission_name: 'can_give_access_to_flat_tenants', description: "some description", created_at: new Date(), updated_at: new Date() },
      ]
    )
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('permissions', null, {});
  }
};
