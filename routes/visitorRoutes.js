const express=require('express');

const { addVisitorAndVehicle, setClockOut, viewVisitors, deleteVisitor }=require('../controllers/visitorController');

const router=express.Router();

router.get('/viewAll',viewVisitors);

router.post('/add',(req,res)=>
{
    addVisitorAndVehicle(req,res);
});

router.patch('/clockout/:id',(req,res)=>
{
    setClockOut(req,res);
})

router.delete('/delete/:id', deleteVisitor);


module.exports=router;
