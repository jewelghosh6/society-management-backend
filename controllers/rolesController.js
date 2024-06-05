const { getAllUserRoles } = require("../services/rolesAndPermissionService");


const getAllRoles = async (req, res) => {
    try {
        let rolesList = await getAllUserRoles();
        res.send({ success: true, data: rolesList });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllRoles
}