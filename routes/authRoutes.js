const express = require('express');
const { login, generateAccessToken, signOut } = require('../controllers/authController');

const router = express.Router();


router.post('/sign-in', (req, res) => {
    login(req, res);
})

router.post('/sign-out', (req, res) => {
    signOut(req, res);
})

router.post('/generate-access-token', (req, res) => {
    generateAccessToken(req, res);
})

router.post('/forgot-password', (req, res) => {
    generateForgotPasswordLink(req, res);
})

module.exports = router;
