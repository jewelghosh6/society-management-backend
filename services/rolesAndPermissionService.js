const Permissions = require("../db/models/permissions");
const Roles = require("../db/models/roles")
const RoleHasPermissions = require("../db/models/roleHasPermissions");
const UserHasRoles = require("../db/models/userHasRoles");


const getAllUserRoles = async () => {
    try {
        let rolesList = await Roles.findAll({
            attributes: [
                "role_name",
                "description",
                "id"
            ]
        });
        return rolesList.map(item => item.dataValues);
    } catch (error) {
        console.log(error);
    }
}

const getPermissionsList = async () => {
    try {
        let permissionList = await Permissions.findAll({
            attributes: ['permission_name', 'description', 'id']
        })
        return permissionList.map(item => item.dataValues)
    } catch (error) {
        console.log(error);
    }
}
const getPermissionsByRoleId = async (role_id) => {
    try {
        let permissionList = await RoleHasPermissions.findAll({
            where: {
                role_id
            },
            attributes: ["role_id", 'permission_id'],
            // include:[
            //     {model:}
            // ]
        })
        permissionList = permissionList.map(item => item.dataValues)
        // console.log("permissionList", permissionList);
        return permissionList;
    } catch (error) {
        console.log(error);
    }
}
// getPermissionsByRoleId(2);

const assignRoleByUserId = async (userId, rolesAndPermissionData) => {
    try {
        let resp = await UserHasRoles.create({ user_id: userId, role_id: rolesAndPermissionData.roles[0].id })
        console.log(resp);
        return resp;
    } catch (error) {
        console.log(error);
    }
}

const getRoleIdByRoleName = async (roleName) => {
    try {
        let roleIns = await Roles.findOne({
            where: {
                role_name: roleName //'SUPER-ADMIN'
            },
            attributes: ["id", "role_name"]
        })
        return roleIns.dataValues.id;
        // console.log("roleIns", roleIns.dataValues);
    } catch (error) {
        console.log(error);
    }
}

const getPermissionIdByPermissionName = async (permissionName) => {
    try {
        let permissionsIns = await Permissions.findOne({
            where: {
                permission_name: permissionName //'SUPER-ADMIN'
            },
            attributes: ["id", "permission_name"]
        })
        return permissionsIns.dataValues.id;
        // console.log("PermissionsIns", permissionsIns.dataValues);
    } catch (error) {
        console.log(error);
    }
}
// getRoleIdByRoleName('SUPER-ADMIN')
// getPermissionIdByPermissionName('can_add_new_member')
module.exports = {
    getAllUserRoles,
    getPermissionsList,
    getPermissionsByRoleId,
    assignRoleByUserId,
    getPermissionIdByPermissionName,
    getRoleIdByRoleName
}