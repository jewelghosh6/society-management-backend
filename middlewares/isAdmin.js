
const { viewUserByID }=require('../services/userService');


const isAdmin=async (req,res,next)=>
{
    console.log('IsAdmin Middleware executed');

    let user=req.user;
    let userObj=await viewUserByID(user.id);
    
    if(userObj.userRole ==null) res.status(403).send('No Roles assigned Yet!');
    else if(userObj.userRole.roleTypes !=='ADMIN') res.status(403).send({message:'Unauthorized'});
    else next();
}

const isAdminOrStaff=async (req,res,next)=>{
    let user=req.user;
    let userObj=await viewUserByID(user.id);
    if(userObj.userRole ==null) res.status(403).send('No Roles assigned Yet!');

    else if(userObj.userRole.roleTypes ==='ADMIN' 
    || userObj.userRole.roleTypes ==='STAFF') next();
    
    else res.status(403).send({message:'Unauthorized'});     
}

module.exports={
    isAdmin,
    isAdminOrStaff
};