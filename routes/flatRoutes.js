const express=require('express');
const { addFlat, showFlats, modifyFlatData, deleteFlatById }=require('../controllers/flatController');

const router=express.Router();


router.post('/add',(req,res)=>     
{
    console.log(req.body);
    addFlat(req,res);
});

router.get('/viewAll',(req,res)=>
{
    showFlats(req,res);
});

router.patch('/update/:id',(req,res)=>{
    modifyFlatData(req,res);
})

router.delete('/delete/:id',(req,res)=>
{
    deleteFlatById(req,res);
});

module.exports=router;
