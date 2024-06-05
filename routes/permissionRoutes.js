const express = require('express');
const { getAllPermissions, getPermissionListByRoleId } = require('../controllers/permissionController');
const router = express.Router();


router.get("/get-all", (req, res) => {
    getAllPermissions(req, res);
})

router.get("/get/:roleId", (req, res) => {
    getPermissionListByRoleId(req, res);
})

module.exports = router;