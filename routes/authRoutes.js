const express = require('express');
const { login, generateAccessToken, signOut, verifyResetToken, generateForgotPasswordLink, setNewPassword } = require('../controllers/authController');

const router = express.Router();


/**
 * @swagger
 * /api/sign-in:
 *   post:
 *     summary: User Login
 *     description: Authenticate user and return token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successful login
 */

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
