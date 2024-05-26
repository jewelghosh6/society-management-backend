const express = require('express');
const { login, generateAccessToken, logout } = require('../controllers/authController');

const router = express.Router();


router.post('/sign-in', (req, res) => {
    login(req, res);
})

router.delete('/sign-out', (req, res) => {
    logout(req, res);
})

router.post('/generate-access-token', (req, res) => {
    generateAccessToken(req, res);
})

module.exports = router;
