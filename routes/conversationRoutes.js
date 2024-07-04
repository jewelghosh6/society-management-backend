const express = require('express');
const { getUsersAndGroupList, createConversation, fetchMessages, fetchConversationListByUserId } = require('../controllers/conversationController');

const router = express.Router();

router.get('/get-users-lists', (req, res) => getUsersAndGroupList(req, res))

router.post('/create', (req, res) => createConversation(req, res))

router.get('/fetch-messages', (req, res) => fetchMessages(req, res));

router.get('/fetch-conversations', (req, res) => fetchConversationListByUserId(req, res))


module.exports = router;