'use strict';

const { getPermissionIdByPermissionName } = require('../../services/rolesAndPermissionService');
const { getUserIdByUserEmail } = require('../../services/userService');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_has_permissions', [
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_add_new_member') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_approve_new_member_joining_request') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_manage_visitor_activity') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_generate_various_bills') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_pay_various_bills') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_various_bills') },
      // { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_pay_own_flat_bills') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_resolve_complaint/suggestions') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_add_new_flat') },
      // { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_single_flat_details') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_all_flat_details') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_allot_new_flats_to_user') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_create_meetings') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_receive_meeting_notification') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_give_access_to_flat_tenants') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_manage_user') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_manage_bills_section') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { user_id: await getUserIdByUserEmail("jewel@gmail.com"), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_has_permissions', null, {});
  }
};
