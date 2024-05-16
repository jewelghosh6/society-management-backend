const UserHasRoles = require("../../db/models/userHasRoles");
const Roles = require("../../db/models/roles");
const Permissions = require("../../db/models/permissions");
const UserHasPermissions = require("../../db/models/userHasPermissions");


const getRolesByUserId = async (id) => {
    try {
        let foundRolesForUser = await UserHasRoles.findAll({
            where: {
                user_id: id
            },
            attributes: ["role_id", "user_id"],
            include: [
                {
                    model: Roles, // will create a left join
                    // attributes: ["role_name"],
                },
            ],
        });
        let foundRoles = foundRolesForUser.map(item => item.dataValues?.role.dataValues.role_name);
        console.log("foundRolesForUser", foundRoles); //{ user_id: foundRolesForUser?.dataValues?.id, role: foundRolesForUser?.dataValues.role.role_name });
        return foundRoles;
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
module.exports = {
    getRolesByUserId,
    getPermissionsByUserId
}