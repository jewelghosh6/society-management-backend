const express = require('express');
const { showUsers,
    viewUser,
    registerUser,
    updateUser,
    removeUser,
    getAllRegisterRequests,
    getRegisterRequestByUserId,
    approveRegisterRequestAndAssignRole
} = require('../controllers/userController');
const authenticateUser = require('../middlewares/authenticateToken');
const { isAdminOrStaff, isAdmin } = require('../middlewares/isAdmin');

const router = express.Router();

router.get('/view-all', (req, res) => {      //To show all users' list //authenticateUser, isAdminOrStaff,
    showUsers(req, res);
});

router.get('/view/:id', authenticateUser, isAdminOrStaff, (req, res) => {   //To show A single User by User Id
    viewUser(req, res);
})

router.post('/register', (req, res) => {     //To Register/Sign-up a User
    registerUser(req, res);
});

router.patch('/update/:id', authenticateUser, isAdmin, (req, res) => {  //For Partially update a User by UserId
    updateUser(req, res);
});

router.delete('/delete/:id', authenticateUser, isAdmin, (req, res) => {
    removeUser(req, res);
})

router.get('/register-request', (req, res) => {      //To show all users' list //authenticateUser, isAdminOrStaff,
    getAllRegisterRequests(req, res);
});

router.get('/register-request/:userId', (req, res) => {
    getRegisterRequestByUserId(req, res);
});

router.post('/register-request/approve',(req,res)=>{
    approveRegisterRequestAndAssignRole(req,res);
})

module.exports = router;