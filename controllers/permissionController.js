const { getPermissionsList, getPermissionsByRoleId } = require("../services/rolesAndPermissionService");


const getAllPermissions = async (req, res) => {
    try {
        let permissionList = await getPermissionsList();
        res.send({ success: true, data: permissionList });
    } catch (error) {
        console.log(error);
    }
}

const getPermissionListByRoleId = async (req, res) => {
    let roleId = req.params.roleId;
    try {
        let permissionList = await getPermissionsByRoleId(roleId);
        res.send({ success: true, data: permissionList })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllPermissions,
    getPermissionListByRoleId
}