const UserHasRoles = require("../../db/models/userHasRoles");
const Roles = require("../../db/models/roles");
const Permissions = require("../../db/models/permissions");
const UserHasPermissions = require("../../db/models/userHasPermissions");
const RoleHasPermissions = require("../../db/models/roleHasPermissions");


const getRolesByUserId = async (id) => {
    try {
        let foundRolesForUser = await UserHasRoles.findOne({
            where: {
                user_id: id
            },
            // attributes: ["role_id", "user_id"],
            include: [
                {
                    model: Roles, // will create a left join
                    // attributes: ["role_name"],
                },
            ],
        });
        // let foundRoles = foundRolesForUser.map(item => item.dataValues?.role.dataValues.role_name);
        console.log("foundRolesForUser>>>", foundRolesForUser); //{ user_id: foundRolesForUser?.dataValues?.id, role: foundRolesForUser?.dataValues.role.role_name });
        return foundRolesForUser.role.role_name;
    } catch (error) {
        console.log(error);
    }

}

const getPermissionsByUserId = async (id) => {
    try {
        let foundPermissionsForUser = await UserHasPermissions.findAll({
            where: {
                user_id: id
            },
            include: [{
                model: Permissions
            }]
        });
        let foundPermissions = foundPermissionsForUser.map(item => item.dataValues?.permission.dataValues?.permission_name)
        console.log("foundPermissionsForUser", foundPermissions);

        return foundPermissions;
    } catch (error) {
        console.log(error);
    }
}



const getPermissionNameByPermissionId = async (permId) => {
    try {
        let permissionName = await Permissions.findOne({
            where: {
                id: permId
            }
        })
        // console.log("permissionName", permissionName.dataValues.permission_name);
        return permissionName.dataValues.permission_name;
    } catch (error) {
        console.log(error);
    }

}
// getPermissionNameByPermissionId(51)
// console.log(await getPermissionsByRoleName("ADMIN"))
// getPermissionsByRoleName("ADMIN").then(res => console.log(res)).catch(err => console.error(err))

module.exports = {
    getRolesByUserId,
    getPermissionsByUserId
}