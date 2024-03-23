const express=require('express');
const { login, generateAccessToken, logout}=require('../controllers/authController');

const router=express.Router();


router.post('/login',(req,res)=>
{
    login(req,res);
})

router.delete('/logout',(req,res)=>
{
    logout(req,res);
})

router.post('/generateAccessToken',(req,res)=>{
    generateAccessToken(req,res);
})

module.exports=router;
