const express = require('express');
const { login, generateAccessToken, signOut, verifyResetToken, generateForgotPasswordLink, setNewPassword } = require('../controllers/authController');

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
router.post('/verify-password-reset-token', (req, res) => {
    verifyResetToken(req, res);
})

router.post('/set-new-password', (req, res) => {
    setNewPassword(req, res);
})

module.exports = router;
