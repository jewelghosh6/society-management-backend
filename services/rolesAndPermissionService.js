const Permissions = require("../db/models/permissions");
const Roles = require("../db/models/roles")
const RoleHasPermissions = require("../db/models/roleHasPermissions")


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

module.exports = {
    getAllUserRoles,
    getPermissionsList,
    getPermissionsByRoleId
}