'use strict';

const { getRoleIdByRoleName, getPermissionIdByPermissionName } = require('../../services/rolesAndPermissionService');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role_has_permissions', [
      //For 'SUPER-ADMIN'
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_add_new_member') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_approve_new_member_joining_request') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_visitor_activity') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_generate_various_bills') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_pay_various_bills') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_various_bills') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_resolve_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },
      //:For Flats
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_add_new_flat') },
      // { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_single_flat_details') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_all_flat_details') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_allot_new_flats_to_user') },

      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_create_meetings') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_receive_meeting_notification') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_give_access_to_flat_tenants') },
      // { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_pay_own_flat_bills') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_user') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_bills_section') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { role_id: await getRoleIdByRoleName('SUPER-ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },

      // 'ADMIN'
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_receive_meeting_notification') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_create_meetings') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_allot_new_flats_to_user') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_all_flat_details') },
      // { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_single_flat_details') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_add_new_flat') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_resolve_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_various_bills') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_pay_various_bills') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_generate_various_bills') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_visitor_activity') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_approve_new_member_joining_request') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_add_new_member') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_user') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_manage_bills_section') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { role_id: await getRoleIdByRoleName('ADMIN'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },

      //for SOCIETY MANAGER/PRESIDENT
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_generate_various_bills') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_pay_various_bills') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_various_bills') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_add_new_flat') },
      // { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_single_flat_details') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_all_flat_details') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_create_meetings') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_manage_bills_section') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { role_id: await getRoleIdByRoleName('SOCIETY-MANAGER/PRESIDENT'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },

      //for FLAT-RESIDENT/OWNER
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_view_single_flat_details') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_receive_meeting_notification') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_pay_various_bills') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_pay_own_flat_bills') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },
      { role_id: await getRoleIdByRoleName('FLAT-RESIDENT/OWNER'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },



      //WATCH-MAN
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_manage_visitor_activity') },
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },
      { role_id: await getRoleIdByRoleName('WATCH-MAN'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },


      //TENANT
      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('can_pay_own_flat_bills') },
      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('can_receive_meeting_notification') },
      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('TENANT'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },


      //STAFF
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_create_meetings') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_raise_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_resolve_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_view_complaint/suggestions') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_manage_visitor_activity') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('have_access_to_group_chat') },

      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_view_dashboard') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_view_security_section') },
      { role_id: await getRoleIdByRoleName('STAFF'), permission_id: await getPermissionIdByPermissionName('can_view_events_section') },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_has_permissions', null, {});
  }
};
