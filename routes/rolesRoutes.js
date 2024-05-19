const express = require('express');
const { getAllRoles } = require('../controllers/rolesController');
const router = express.Router();


router.get("/get-all", (req, res) => {
    getAllRoles(req, res);
})

module.exports = router;